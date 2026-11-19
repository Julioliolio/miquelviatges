/** Site root including the GitHub Pages base path, always ending in "/". */
const homeUrl = import.meta.env.BASE_URL.replace(/\/?$/, "/");

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = { en: "English", es: "Español" };

const en = {
  "meta.homeTitle": "Tramuntana — Immersive travel expeditions",
  "meta.homeDescription":
    "Small-group wildlife and conservation expeditions to Palau, Indonesia, Honduras and the Philippines.",
  "meta.creditsTitle": "Photo credits · Tramuntana",
  "meta.creditsDescription": "Credits and licences for the photographs used on this site.",

  "nav.expeditions": "Expeditions",
  "nav.project": "The project",
  "nav.home": "Tramuntana — home",
  "nav.language": "Language",

  "hero.tagline": "Immersive journeys to places<br />that don’t fit on postcards.",
  "hero.cta": "See the expeditions",

  "statement.kicker": "A different way to travel",
  "statement.line":
    "We travel slowly, in small groups, guided by the people who call each place home — not to see the world, but to understand it.",
  "statement.aria": "Our approach",

  "packages.title": "Wildlife<br /><em>expeditions</em>",
  "packages.note": "{n} journeys · Nature & conservation",
  "packages.aria": "Expeditions",
  "card.best": "Best",

  "index.kicker": "Quick index",
  "index.title": "Every journey, <em>at a glance</em>",
  "index.aria": "Expedition index",

  "philosophy.kicker": "The project",
  "philosophy.text":
    "Our philosophy begins with seeing travel as an opportunity to immerse ourselves in local culture — and to understand, without prejudice, other ways of living.",
  "philosophy.link": "Learn more about how we travel",
  "philosophy.alt": "Traveller’s map and worn field camera",

  "gallery.kicker": "Field notes",
  "gallery.line": "Some of the animals waiting for us.",
  "gallery.aria": "Wildlife of our expeditions",
  "gallery.jellyfish": "Golden jellyfish",
  "gallery.orangutan": "Bornean orangutan",
  "gallery.whaleshark": "Whale shark",
  "gallery.tarsier": "Philippine tarsier",
  "gallery.komodo": "Komodo dragon",

  "footer.title": "Hear about the next<br /><em>expedition first.</em>",
  "footer.placeholder": "your@email.com",
  "footer.emailLabel": "Email address",
  "footer.join": "Join",
  "footer.consent": "I have read and accept the",
  "footer.privacy": "privacy policy",
  "footer.thanks": "Thank you — talk soon.",
  "footer.follow": "Follow us",
  "footer.questions": "Questions?",
  "footer.faq": "Frequently asked questions",
  "footer.credits": "Photo credits",
  "footer.aria": "Newsletter and site information",

  "trip.back": "All expeditions",
  "trip.duration": "Duration",
  "trip.bestSeason": "Best season",
  "trip.stages": "Stages",
  "trip.journey": "The journey",
  "trip.about": "About this expedition",
  "trip.glance": "At a glance",
  "trip.route": "Route",
  "trip.goodToKnow": "Good to know",
  "trip.focus": "Focus",
  "trip.itinerary": "Itinerary",
  "trip.dayByDay": "Day <em>by day</em>",
  "trip.wildlife": "Wildlife",
  "trip.species": "Species <em>to look for</em>",
  "trip.bestTime": "Best time to go",
  "trip.enquire": "Interested in <em>{country}?</em>",
  "trip.enquireAria": "Enquire",
  "trip.enquireText": "Write to us for dates, prices and group availability for this expedition.",
  "trip.enquireCta": "Ask about this expedition",
  "trip.next": "Next expedition",
  "trip.credits": "Photo credits",
  "trip.creditBy": "by",
  "trip.via": "via Wikimedia Commons",

  "credits.kicker": "Credits",
  "credits.title": "Photographs",
  "credits.intro":
    "The wildlife and landscape photographs on this site come from Wikimedia Commons and are used under the licences listed below. Many thanks to their authors.",
};

const es: Record<keyof typeof en, string> = {
  "meta.homeTitle": "Tramuntana — Expediciones de viaje inmersivas",
  "meta.homeDescription":
    "Expediciones de fauna y conservación en grupos reducidos a Palaos, Indonesia, Honduras y Filipinas.",
  "meta.creditsTitle": "Créditos fotográficos · Tramuntana",
  "meta.creditsDescription": "Créditos y licencias de las fotografías utilizadas en esta web.",

  "nav.expeditions": "Expediciones",
  "nav.project": "El proyecto",
  "nav.home": "Tramuntana — inicio",
  "nav.language": "Idioma",

  "hero.tagline": "Viajes inmersivos a lugares<br />que no caben en una postal.",
  "hero.cta": "Ver las expediciones",

  "statement.kicker": "Otra forma de viajar",
  "statement.line":
    "Viajamos despacio, en grupos pequeños, de la mano de quienes viven en cada lugar — no para ver el mundo, sino para entenderlo.",
  "statement.aria": "Nuestra forma de viajar",

  "packages.title": "Expediciones<br /><em>de fauna</em>",
  "packages.note": "{n} viajes · Naturaleza y conservación",
  "packages.aria": "Expediciones",
  "card.best": "Mejor época",

  "index.kicker": "Índice rápido",
  "index.title": "Todos los viajes, <em>de un vistazo</em>",
  "index.aria": "Índice de expediciones",

  "philosophy.kicker": "El proyecto",
  "philosophy.text":
    "Nuestra filosofía parte de entender el viaje como una oportunidad para sumergirnos en la cultura local y comprender, sin prejuicios, otras formas de vivir.",
  "philosophy.link": "Descubre cómo viajamos",
  "philosophy.alt": "Mapa de viaje y una cámara de campo desgastada",

  "gallery.kicker": "Cuaderno de campo",
  "gallery.line": "Algunos de los animales que nos esperan.",
  "gallery.aria": "Fauna de nuestras expediciones",
  "gallery.jellyfish": "Medusa dorada",
  "gallery.orangutan": "Orangután de Borneo",
  "gallery.whaleshark": "Tiburón ballena",
  "gallery.tarsier": "Tarsero filipino",
  "gallery.komodo": "Dragón de Komodo",

  "footer.title": "Entérate antes que nadie<br /><em>de la próxima expedición.</em>",
  "footer.placeholder": "tu@email.com",
  "footer.emailLabel": "Correo electrónico",
  "footer.join": "Unirme",
  "footer.consent": "He leído y acepto la",
  "footer.privacy": "política de privacidad",
  "footer.thanks": "Gracias — hablamos pronto.",
  "footer.follow": "Síguenos",
  "footer.questions": "¿Preguntas?",
  "footer.faq": "Preguntas frecuentes",
  "footer.credits": "Créditos fotográficos",
  "footer.aria": "Boletín e información del sitio",

  "trip.back": "Todas las expediciones",
  "trip.duration": "Duración",
  "trip.bestSeason": "Mejor época",
  "trip.stages": "Etapas",
  "trip.journey": "El viaje",
  "trip.about": "Sobre esta expedición",
  "trip.glance": "De un vistazo",
  "trip.route": "Ruta",
  "trip.goodToKnow": "A tener en cuenta",
  "trip.focus": "Temas",
  "trip.itinerary": "Itinerario",
  "trip.dayByDay": "Día <em>a día</em>",
  "trip.wildlife": "Fauna",
  "trip.species": "Especies <em>que buscaremos</em>",
  "trip.bestTime": "Mejor época para viajar",
  "trip.enquire": "¿Te interesa <em>{country}?</em>",
  "trip.enquireAria": "Solicitar información",
  "trip.enquireText":
    "Escríbenos para conocer fechas, precios y plazas disponibles de esta expedición.",
  "trip.enquireCta": "Pregunta por esta expedición",
  "trip.next": "Siguiente expedición",
  "trip.credits": "Créditos fotográficos",
  "trip.creditBy": "de",
  "trip.via": "vía Wikimedia Commons",

  "credits.kicker": "Créditos",
  "credits.title": "Fotografías",
  "credits.intro":
    "Las fotografías de fauna y paisaje de esta web proceden de Wikimedia Commons y se utilizan bajo las licencias que se indican a continuación. Muchas gracias a sus autores.",
};

export type UiKey = keyof typeof en;

const ui: Record<Locale, Record<UiKey, string>> = { en, es };

export function useT(locale: Locale) {
  return (key: UiKey, vars: Record<string, string | number> = {}) =>
    ui[locale][key].replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
}

const prefix = (locale: Locale) => (locale === "en" ? homeUrl : `${homeUrl}es/`);

export const routes = {
  home: (locale: Locale) => prefix(locale),
  trip: (locale: Locale, slug: string) =>
    `${prefix(locale)}${locale === "en" ? "trips" : "viajes"}/${slug}/`,
  credits: (locale: Locale) => `${prefix(locale)}${locale === "en" ? "credits" : "creditos"}/`,
};

/** URLs of the same page in every language, for the switcher and hreflang links. */
export type Alternates = Record<Locale, string>;
