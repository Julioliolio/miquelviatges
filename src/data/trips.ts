import type { ImageMetadata } from "astro";
import credits from "./photo-credits.json";
import { homeUrl } from "./site";

const files = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/trips/**/*.jpg",
  { eager: true }
);

export interface Photo {
  src: ImageMetadata;
  alt: string;
  credit: PhotoCredit;
}

export interface PhotoCredit {
  title: string;
  page: string;
  artist: string;
  license: string;
}

/** Resolve a photo key like "palau/hero" to its bundled image + licence credit. */
function photo(key: string, alt: string): Photo {
  const file = files[`../assets/trips/${key}.jpg`];
  const credit = (credits as Record<string, PhotoCredit>)[key];
  if (!file || !credit) throw new Error(`Missing photo or credit for "${key}"`);
  return { src: file.default, alt, credit };
}

export interface Day {
  label: string;
  title?: string;
  items: string[];
}

export interface Stage {
  days: string;
  place: string;
  title: string;
  photo: Photo;
  intro?: string;
  items?: string[];
  schedule?: Day[];
}

export interface Species {
  name: string;
  note?: string;
  photo?: Photo;
}

export interface Trip {
  slug: string;
  country: string;
  title: string;
  route: string;
  duration: string;
  season: string;
  seasonShort: string;
  seasonWhy: string[];
  tags: string[];
  summary: string;
  intro: string[];
  hero: Photo;
  stages: Stage[];
  fauna: Species[];
  facts?: string[];
}

export const trips: Trip[] = [
  {
    slug: "palau",
    country: "Palau",
    title: "Mantas, wrecks and the Rock Islands",
    route: "Koror · Rock Islands · Babeldaob",
    duration: "10 days",
    season: "November to April",
    seasonShort: "Nov – Apr",
    seasonWhy: [
      "The sea is usually at its calmest.",
      "Underwater visibility is excellent.",
    ],
    tags: ["Diving & snorkelling", "Marine conservation", "Rainforest"],
    summary:
      "Manta channels, Second World War wrecks, a lake of golden jellyfish and the rainforest of Babeldaob.",
    intro: [
      "A ten-day route through Palau centred on nature and wildlife. It combines some of the best dive sites on the planet with landscapes found nowhere else: hundreds of jungle-covered limestone islets rising out of a turquoise lagoon.",
      "Between dives we explore tropical rainforest and waterfalls, swim among millions of golden jellyfish and visit a marine conservation project working to restore Palau’s reefs.",
    ],
    hero: photo("palau/hero", "Jungle-covered Rock Islands scattered across a turquoise lagoon in Palau"),
    stages: [
      {
        days: "Days 1–2",
        place: "Spain → Koror",
        title: "Crossing the Pacific",
        photo: photo("palau/koror", "Palau’s Rock Islands seen from the air"),
        schedule: [
          {
            label: "Day 1",
            title: "Departure from Spain",
            items: [
              "Flight from Spain to Palau, usually with stopovers in Asia.",
              "Night on board.",
            ],
          },
          {
            label: "Day 2",
            title: "Arrival in Koror",
            items: [
              "Arrival in Koror and transfer to our accommodation.",
              "Sunset walk around the harbour.",
              "Visit to the local market, if timing allows.",
              "Time to rest and adjust to the climate.",
            ],
          },
        ],
      },
      {
        days: "Days 3–5",
        place: "Rock Islands · German Channel · Blue Corner",
        title: "The lagoon and the open reef",
        photo: photo("palau/manta", "Manta ray gliding overhead in Palau"),
        schedule: [
          {
            label: "Day 3",
            title: "Rock Islands",
            items: [
              "Full-day tour of the Rock Islands Southern Lagoon.",
              "Kayaking between the islets.",
              "Snorkelling on the reefs.",
              "Picnic on a deserted beach.",
            ],
          },
          {
            label: "Day 4",
            title: "Mantas and reefs",
            items: [
              "Dive or snorkel in German Channel to watch manta rays.",
              "Second dive at Blue Corner, considered one of the best dive sites in the world.",
            ],
          },
          {
            label: "Day 5",
            title: "Second World War wrecks",
            items: [
              "Dive or snorkel among ships and aircraft sunk during the Second World War.",
              "Free afternoon in Koror.",
            ],
          },
        ],
      },
      {
        days: "Days 6–7",
        place: "Biota Palau · Jellyfish Lake",
        title: "Coral farms and golden jellyfish",
        photo: photo("palau/jellyfish", "Snorkeller swimming among golden jellyfish in Jellyfish Lake"),
        schedule: [
          {
            label: "Day 6",
            title: "Biota fish and coral farm",
            items: [
              "Visit to Biota Palau and its breeding facilities for ornamental fish and corals.",
              "An introduction to aquaculture, reef restoration and marine conservation.",
              "Snorkelling on a nearby reef to see its marine biodiversity.",
              "Return to Koror.",
            ],
          },
          {
            label: "Day 7",
            title: "Jellyfish Lake",
            items: [
              "Visit to Jellyfish Lake (if it is open to the public).",
              "Snorkelling among millions of golden, non-stinging jellyfish.",
              "More snorkelling in the nearby lagoons.",
            ],
          },
        ],
      },
      {
        days: "Days 8–9",
        place: "Ngardmau · Long Beach · Milky Way",
        title: "Waterfalls, sandbars and white mud",
        photo: photo("palau/ngardmau", "Ngardmau Waterfall pouring through tropical rainforest"),
        schedule: [
          {
            label: "Day 8",
            title: "Ngardmau Waterfall",
            items: [
              "Excursion to Ngardmau Waterfall.",
              "Hiking through tropical rainforest.",
              "A swim beneath the falls.",
            ],
          },
          {
            label: "Day 9",
            title: "Long Beach and the Milky Way",
            items: [
              "Walk along Long Beach, a sandbar that only appears at low tide.",
              "Natural mud bath in the Milky Way lagoon.",
              "Snorkelling on nearby reefs.",
            ],
          },
        ],
      },
      {
        days: "Day 10",
        place: "Koror → Spain",
        title: "Homeward",
        photo: photo("palau/rock", "Ngerukewid islands and their reefs from the air"),
        items: ["Transfer to the airport.", "Return flight to Spain."],
      },
    ],
    fauna: [
      { name: "Oceanic manta", photo: photo("palau/fauna-manta", "Manta ray in German Channel, Palau") },
      { name: "Grey reef shark", photo: photo("palau/fauna-greyreef", "Reef shark cruising over Blue Corner") },
      {
        name: "Schools of barracuda and jacks",
        photo: photo("palau/fauna-jacks", "A dense school of jacks in the blue at Blue Corner"),
      },
      {
        name: "Hard and soft corals",
        note: "In remarkable diversity",
        photo: photo("palau/fauna-coral", "Orange soft coral on a reef wall"),
      },
      { name: "Blacktip reef shark" },
      { name: "Whitetip reef shark" },
      { name: "Chambered nautilus", note: "On specialised excursions" },
      { name: "Green turtle" },
      { name: "Hawksbill turtle" },
      { name: "Dugong", note: "Very hard to spot" },
      { name: "Golden jellyfish" },
      { name: "Spinner dolphin" },
      { name: "Mandarinfish" },
      { name: "Bumphead parrotfish" },
    ],
  },
  {
    slug: "indonesia",
    country: "Indonesia",
    title: "Orangutans, starlings and dragons",
    route: "Borneo · Bali · Komodo",
    duration: "10 days",
    season: "April to June, or September to November",
    seasonShort: "Apr – Jun · Sep – Nov",
    seasonWhy: [
      "The best balance of weather and wildlife watching.",
      "Good conditions for diving.",
    ],
    tags: [
      "Orangutans",
      "Conservation",
      "Night herping",
      "Bali starling",
      "Komodo dragons",
      "Mantas",
      "Diving",
    ],
    summary:
      "Orangutan rehabilitation in Borneo, the rescue of the Bali starling and two days by boat through Komodo National Park.",
    intro: [
      "This itinerary brings together three of Indonesia’s most spectacular natural experiences: orangutan conservation in Borneo, the comeback of the Bali starling, and a two-day crossing of Komodo National Park.",
      "In Komodo we visit Komodo and Rinca islands, Pink Beach and Manta Point, and spend a night on deck under the stars after watching thousands of flying foxes take to the sky.",
    ],
    hero: photo("indonesia/hero", "Green ridges and three bays seen from the Padar Island viewpoint, Komodo National Park"),
    stages: [
      {
        days: "Days 1–3",
        place: "Tanjung Puting National Park, Borneo",
        title: "Up the river to Camp Leakey",
        photo: photo("indonesia/orangutan", "Bornean orangutan in the forest of Tanjung Puting"),
        items: [
          "River cruise through the jungle aboard a klotok, a traditional wooden boat.",
          "Visit to Camp Leakey to learn about its projects to protect and rehabilitate the Bornean orangutan.",
          "Watching orangutans in the wild.",
          "Looking for proboscis monkeys, gibbons, macaques and hornbills.",
          "Guided walks through the forest.",
          "Night herping in search of Wagler’s pit viper, tokay geckos, flying lizards, Wallace’s flying frog, and other snakes, frogs and tropical invertebrates.",
        ],
      },
      {
        days: "Days 4–6",
        place: "Bali",
        title: "Bringing back the Bali starling",
        photo: photo("indonesia/starling", "Bali starling, white with a blue mask, perched on a branch"),
        items: [
          "Visit to the Sacred Monkey Forest Sanctuary.",
          "Visit to the Begawan Foundation to learn about its Bali starling recovery programme.",
          "Excursion to West Bali National Park to look for reintroduced birds living in the wild.",
          "Diving or snorkelling at Menjangan Island.",
        ],
      },
      {
        days: "Days 7–10",
        place: "Komodo National Park",
        title: "Dragons, mantas and a night on deck",
        photo: photo("indonesia/komodo", "Close-up of a Komodo dragon’s head with its forked tongue out"),
        schedule: [
          {
            label: "Day 7",
            title: "Labuan Bajo",
            items: [
              "Arrival in Labuan Bajo, on Flores.",
              "Free afternoon to explore the port and the town.",
              "Night in a hotel in Labuan Bajo.",
            ],
          },
          {
            label: "Day 8",
            title: "Komodo Island",
            items: [
              "Boat departure into Komodo National Park.",
              "Trek across Komodo Island to see the Komodo dragon.",
              "Snorkelling at Pink Beach.",
              "At sunset, a stop at Kalong Island to watch thousands of flying foxes emerge.",
              "Night sleeping on the boat’s deck.",
            ],
          },
          {
            label: "Day 9",
            title: "Rinca and Manta Point",
            items: [
              "Trek on Rinca Island to see more Komodo dragons.",
              "Snorkelling at Manta Point, with the chance of oceanic mantas.",
              "Boat back to Labuan Bajo and a night in a hotel.",
            ],
          },
          {
            label: "Day 10",
            title: "Homeward",
            items: ["Return flight to Europe."],
          },
        ],
      },
    ],
    fauna: [
      {
        name: "Bornean orangutan",
        photo: photo("indonesia/fauna-orangutan", "Orangutan mother and infant on a branch in Tanjung Puting"),
      },
      { name: "Proboscis monkey", photo: photo("indonesia/fauna-proboscis", "Proboscis monkey with its long nose") },
      { name: "Wagler’s pit viper", photo: photo("indonesia/fauna-wagler", "Wagler’s pit viper coiled on a branch") },
      { name: "Komodo dragon", photo: photo("indonesia/fauna-komodo", "Komodo dragon resting with its mouth open") },
      { name: "Hornbills and other forest birds" },
      { name: "Wallace’s flying frog" },
      { name: "Bali starling" },
      { name: "Oceanic manta" },
      { name: "Reef sharks" },
      { name: "Sea turtles" },
    ],
  },
  {
    slug: "honduras",
    country: "Honduras",
    title: "Whale sharks and island iguanas",
    route: "Roatán · Utila · Cayos Cochinos",
    duration: "10 days",
    season: "August and September",
    seasonShort: "Aug – Sep",
    seasonWhy: [
      "The best chance of seeing whale sharks off Utila.",
      "Excellent conditions for diving, snorkelling and exploring the reefs and Cayos Cochinos.",
    ],
    tags: ["Reef diving", "Whale sharks", "Herpetology", "Iguana conservation"],
    summary:
      "Caribbean reefs, whale sharks off Utila, and fieldwork with the teams protecting the Utila iguana and the pink boa.",
    intro: [
      "Ten days across the Bay Islands of Honduras, on the Mesoamerican Barrier Reef. We dive and snorkel among Caribbean reef sharks, go looking for whale sharks off Utila, and search the forests and mangroves for reptiles found nowhere else on Earth.",
      "On Utila we join the conservation teams working with the critically endangered Utila iguana, and in Cayos Cochinos we look for its famous pink boa.",
    ],
    hero: photo("honduras/hero", "Roatán’s forested coast and barrier reef seen from the air"),
    stages: [
      {
        days: "Days 1–3",
        place: "Roatán",
        title: "Reefs, gardens and a night in the forest",
        photo: photo("honduras/roatan", "Nurse shark resting among corals in the Bay Islands"),
        schedule: [
          {
            label: "Day 1",
            title: "Arrival",
            items: ["Arrival in Roatán.", "Rest and a first look at the island."],
          },
          {
            label: "Day 2",
            title: "The barrier reef",
            items: [
              "Diving or snorkelling on the barrier reef.",
              "Looking for Caribbean reef sharks and nurse sharks.",
              "Hike through Carambola Botanical Gardens.",
            ],
          },
          {
            label: "Day 3",
            title: "A day with a herpetologist",
            items: [
              "A full day with a local guide who specialises in wildlife and herpetology.",
              "Exploring dry forest, secondary rainforest, mangroves and the coast.",
              "Searching for birds, reptiles, amphibians and invertebrates, and learning to read Roatán’s biodiversity.",
              "At dusk, night herping in search of snakes, frogs, geckos and anoles.",
            ],
          },
        ],
      },
      {
        days: "Days 4–7",
        place: "Utila",
        title: "Whale sharks and the Utila iguana",
        photo: photo("honduras/whaleshark", "Whale shark feeding just below the surface with its mouth open"),
        schedule: [
          {
            label: "Day 4",
            title: "Utila",
            items: ["Transfer to Utila.", "Diving and snorkelling on the island’s reefs."],
          },
          {
            label: "Day 5",
            title: "Whale sharks",
            items: [
              "Boat trip in search of whale sharks (depending on the season).",
              "A second dive or snorkel.",
            ],
          },
          {
            label: "Day 6",
            title: "Research stations",
            items: [
              "Visit to the Kanahau Utila Research & Conservation Facility.",
              "Visit to the Utila Iguana Research & Breeding Station.",
              "Learning about the breeding, research and conservation programmes for the Utila iguana.",
            ],
          },
          {
            label: "Day 7",
            title: "Into the mangroves",
            items: [
              "Exploring the mangroves alongside the conservation teams.",
              "Monitoring the wild iguana population and, if the programme allows, releasing the young raised that year.",
              "A night dive at dusk.",
            ],
          },
        ],
      },
      {
        days: "Days 8–9",
        place: "Cayos Cochinos",
        title: "In search of the pink boa",
        photo: photo("honduras/cochinos", "A tiny palm-covered cay in Cayos Cochinos"),
        schedule: [
          {
            label: "Day 8",
            title: "Cayos Cochinos",
            items: [
              "Transfer to Cayos Cochinos.",
              "Snorkelling on protected reefs.",
              "Watching seabirds.",
            ],
          },
          {
            label: "Day 9",
            title: "The pink boa",
            items: [
              "Walk in search of the Cayos Cochinos pink boa.",
              "Snorkelling on different reefs and untouched beaches.",
              "Return to Roatán in the afternoon.",
            ],
          },
        ],
      },
      {
        days: "Day 10",
        place: "Roatán",
        title: "Homeward",
        photo: photo("honduras/beach", "West Bay Beach on Roatán with its wooden pier"),
        items: ["Return flight."],
      },
    ],
    fauna: [
      { name: "Whale shark", photo: photo("honduras/fauna-whaleshark", "Whale shark’s spotted flank in open water") },
      {
        name: "Utila iguana",
        note: "Endemic and critically endangered",
        photo: photo("honduras/fauna-iguana", "Utila iguana with its spiny crest, basking on a log"),
      },
      { name: "Hawksbill turtle", photo: photo("honduras/fauna-hawksbill", "Hawksbill turtle over a Caribbean reef") },
      { name: "Spotted eagle ray", photo: photo("honduras/fauna-eagleray", "Spotted eagle ray in open water") },
      { name: "Caribbean reef shark" },
      { name: "Nurse shark" },
      { name: "Green turtle" },
      { name: "Cayos Cochinos pink boa" },
      { name: "Dolphins", note: "Occasionally" },
      {
        name: "Octopus, morays, squid and lobsters",
        note: "With a huge diversity of Caribbean fish and corals",
      },
    ],
  },
  {
    slug: "philippines",
    country: "Philippines",
    title: "Wild Philippines",
    route: "Palawan · Bohol · Ticao · Samal",
    duration: "12 days",
    season: "March is ideal; February to April is excellent",
    seasonShort: "Feb – Apr",
    seasonWhy: [
      "The best chance of oceanic mantas around Ticao Island.",
      "A good chance of whale sharks in the same area.",
      "Generally dry weather and excellent diving conditions.",
    ],
    tags: ["Crocodile conservation", "Tarsiers", "Oceanic mantas", "Fruit bats", "Giant clams"],
    summary:
      "Twelve days through rainforests, reefs and islands in search of some of the most extraordinary and threatened species on the planet.",
    intro: [
      "An expedition through some of the most fascinating ecosystems in Southeast Asia. Over twelve days we cross rainforests, coral reefs and island paradises in search of some of the most extraordinary and threatened species on the planet, always alongside the projects and centres committed to protecting them.",
      "An expedition designed for travellers who love wildlife: unforgettable encounters with the Philippines’ most iconic species, spectacular landscapes and first-hand conservation work in one of the most biodiverse countries on Earth.",
    ],
    hero: photo("philippines/hero", "Boat entering the cave mouth of the Puerto Princesa Underground River"),
    facts: ["4 internal flights"],
    stages: [
      {
        days: "Days 1–3",
        place: "Puerto Princesa, Palawan",
        title: "Crocodiles and the underground river",
        photo: photo("philippines/river", "Emerald water and palms in Puerto Princesa Subterranean River National Park"),
        intro:
          "The adventure begins on Palawan, at a conservation centre protecting the Philippine crocodile, one of the most threatened crocodiles in the world. There we also meet the saltwater crocodile, the largest living reptile on the planet.",
        items: [
          "Conservation centre for the Philippine crocodile.",
          "Saltwater crocodiles.",
          "Puerto Princesa Subterranean River National Park.",
          "Forests home to hornbills, monitor lizards and monkeys.",
        ],
      },
      {
        days: "Days 4–6",
        place: "Bohol",
        title: "Tarsiers and the reefs of Balicasag",
        photo: photo("philippines/tarsier", "Philippine tarsier with huge round eyes clinging to a branch"),
        intro:
          "In Bohol we visit a conservation centre for the Philippine tarsier, one of the smallest primates in the world, and watch it responsibly. Then we dive the clear waters of Balicasag, one of the country’s best reefs.",
        items: [
          "Conservation centre for the Philippine tarsier.",
          "Diving at Balicasag Island.",
          "Sea turtles and large schools of jacks.",
        ],
      },
      {
        days: "Days 7–9",
        place: "Ticao Island",
        title: "Oceanic mantas",
        photo: photo("philippines/ticao", "Green hills of Ticao Island rising from deep blue water"),
        intro:
          "Ticao is one of the best-kept secrets in the Philippines for ocean lovers. Here we dive in search of majestic oceanic mantas, with a chance of whale sharks depending on the season.",
        items: [
          "Dives with oceanic manta rays.",
          "A chance of whale sharks.",
          "Excellent marine biodiversity.",
          "Waterfalls and natural pools hidden in the rainforest.",
        ],
      },
      {
        days: "Days 10–12",
        place: "Samal Island",
        title: "Bats, giant clams and coral gardens",
        photo: photo("philippines/samal", "Fruit bats roosting at a cave mouth on Samal Island, one in flight"),
        intro:
          "We end on Samal Island, home to the largest known colony of fruit bats in the world, an unforgettable natural spectacle.",
        items: [
          "Monfort Bat Sanctuary, the largest known colony of fruit bats in the world.",
          "Giant Clam Sanctuary, dedicated to protecting tropical giant clams.",
          "Coral Garden: snorkelling or diving on one of the best-preserved reefs in the area.",
        ],
      },
    ],
    fauna: [
      { name: "Philippine tarsier", photo: photo("philippines/fauna-tarsier", "Philippine tarsier gripping a branch in Bohol") },
      { name: "Philippine crocodile", photo: photo("philippines/fauna-croc", "Young Philippine crocodile resting on leaf litter") },
      { name: "Oceanic manta", photo: photo("philippines/fauna-manta", "Oceanic manta ray seen from below") },
      { name: "Giant clams", photo: photo("philippines/fauna-clam", "Giant clam with its mantle open on the reef") },
      { name: "Saltwater crocodile" },
      { name: "Sea turtles" },
      { name: "Whale shark", note: "Possible around Ticao" },
      { name: "Fruit bats", note: "The largest known colony in the world" },
    ],
  },
];

export const tripUrl = (slug: string) => `${homeUrl}trips/${slug}/`;

export const heroSlides = [trips[0].hero, trips[1].hero, trips[3].hero];
