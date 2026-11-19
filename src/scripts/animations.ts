import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ------------------------------------------------------ hero slideshow */
function initHeroSlideshow() {
  const slides = Array.from(document.querySelectorAll<HTMLElement>(".hero-slide"));
  if (slides.length < 2 || reducedMotion) return;

  let current = 0;
  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 8000);
}

/* ----------------------------------------- hero → expeditions transition
   Three moves choreographed on one pinned, scrubbed timeline:
   1. tagline + CTA fly up and out first,
   2. the full-bleed image shrinks into a rounded "postcard" frame,
   3. the giant wordmark flies up, shrinking and darkening until it lands
      as the nav logo (wordmark-morph pattern).                          */
function initHeroTransition() {
  const frame = document.querySelector<HTMLElement>("[data-hero-frame]");
  const word = document.querySelector<HTMLElement>("[data-hero-wordmark]");
  const navWord = document.querySelector<HTMLElement>("[data-nav-wordmark]");
  if (!frame || !word || reducedMotion) return;

  // The giant wordmark IS the logo while the hero is on screen.
  if (navWord) gsap.set(navWord, { autoAlpha: 0 });

  // Measured against pinned-hero geometry (hero fills the viewport).
  const wordCenterY = window.innerHeight - word.offsetHeight / 2;
  const navRect = navWord?.getBoundingClientRect();
  const targetY = (navRect ? navRect.top + navRect.height / 2 : 30) - wordCenterY;
  const targetScale = navRect
    ? Math.max(navRect.width, 100) / word.offsetWidth
    : 0.12;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "+=110%",
      scrub: 0.4,
      pin: true,
      anticipatePin: 1,
    },
  });

  tl.to(
    ".hero-content, .scroll-cue",
    { autoAlpha: 0, y: -70, duration: 0.28, ease: "none" },
    0
  )
    .to(frame, { scale: 0.9, borderRadius: "1.75rem", duration: 1, ease: "none" }, 0)
    .to(word, { y: targetY, scale: targetScale, duration: 0.9, ease: "none" }, 0)
    .to(word, { color: "#161412", duration: 0.3, ease: "none" }, 0.5)
    .to(word, { autoAlpha: 0, duration: 0.1, ease: "none" }, 0.9);

  if (navWord) {
    tl.to(navWord, { autoAlpha: 1, duration: 0.1, ease: "none" }, 0.9);
  }
}

/* ----------------------------------------------- nav: cream after hero */
function initNav() {
  const nav = document.getElementById("site-nav");
  if (!nav) return;

  // Flip as soon as the hero starts shrinking, so cream text never sits on cream.
  ScrollTrigger.create({
    start: () => window.innerHeight * 0.12,
    onEnter: () => nav.classList.add("scrolled"),
    onLeaveBack: () => nav.classList.remove("scrolled"),
  });
}

/* ------------------------------------- statement: word-by-word reveal */
function initStatement() {
  const el = document.querySelector<HTMLElement>("[data-split-words]");
  if (!el) return;

  const words = el.textContent!.trim().split(/\s+/);
  el.innerHTML = words.map((w) => `<span class="w">${w}</span>`).join(" ");

  if (reducedMotion) return;

  gsap.from(el.querySelectorAll(".w"), {
    opacity: 0.12,
    y: 14,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.045,
    scrollTrigger: {
      trigger: el,
      start: "top 78%",
    },
  });
}

/* --------------------------------------- generic fade-up reveals (.reveal) */
function initReveals() {
  const items = gsap.utils.toArray<HTMLElement>(".reveal");
  if (reducedMotion) {
    items.forEach((el) => gsap.set(el, { clearProps: "all" }));
    return;
  }

  ScrollTrigger.batch(items, {
    start: "top 88%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
      }),
  });
}

/* -------------------------- masked-image parallax (cards + dividers) */
function initParallax() {
  if (reducedMotion) return;

  document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
    gsap.fromTo(
      el,
      { yPercent: -7 },
      {
        yPercent: 7,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      }
    );
  });
}

/* --------------------- expedition index: photo trails the cursor */
function initIndexPreview() {
  const section = document.querySelector<HTMLElement>("[data-index]");
  const previewEl = section?.querySelector<HTMLElement>("[data-index-preview]");
  if (!section || !previewEl) return;
  if (reducedMotion || !window.matchMedia("(pointer: fine)").matches) return;

  const imgs = previewEl.querySelectorAll<HTMLElement>("[data-preview-img]");
  gsap.set(previewEl, { scale: 0.94 });
  const xTo = gsap.quickTo(previewEl, "x", { duration: 0.55, ease: "power3" });
  const yTo = gsap.quickTo(previewEl, "y", { duration: 0.55, ease: "power3" });
  const rTo = gsap.quickTo(previewEl, "rotation", { duration: 0.5, ease: "power3" });

  let lastX = 0;
  let settle: ReturnType<typeof setTimeout>;

  section.addEventListener("mousemove", (e) => {
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    xTo(x + 32);
    yTo(y - previewEl.offsetHeight / 2);
    // Tilt with horizontal velocity, then settle flat.
    rTo(gsap.utils.clamp(-7, 7, (e.clientX - lastX) * 0.5));
    lastX = e.clientX;
    clearTimeout(settle);
    settle = setTimeout(() => rTo(0), 90);
  });

  section.querySelectorAll<HTMLElement>("[data-index-row]").forEach((row) => {
    row.addEventListener("mouseenter", () => {
      const i = row.dataset.indexRow;
      imgs.forEach((img) =>
        img.classList.toggle("active", img.dataset.previewImg === i)
      );
      gsap.to(previewEl, { autoAlpha: 1, scale: 1, duration: 0.35, ease: "power2.out" });
    });
  });

  const list = section.querySelector<HTMLElement>(".index-list");
  list?.addEventListener("mouseleave", () => {
    gsap.to(previewEl, { autoAlpha: 0, scale: 0.94, duration: 0.3, ease: "power2.out" });
  });
}

/* ------------------------------- magnetic buttons (pointer only) */
function initMagnetic() {
  if (reducedMotion || !window.matchMedia("(pointer: fine)").matches) return;

  document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
    const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" });

    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      xTo((e.clientX - (rect.left + rect.width / 2)) * 0.35);
      yTo((e.clientY - (rect.top + rect.height / 2)) * 0.35);
    });

    el.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  });
}

initHeroSlideshow();
initHeroTransition();
initNav();
initStatement();
initReveals();
initParallax();
initIndexPreview();
initMagnetic();
