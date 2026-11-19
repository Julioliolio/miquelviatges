import type { ImageMetadata } from "astro";
import type { Locale } from "../i18n/ui";
import credits from "./photo-credits.json";

const files = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/trips/**/*.jpg",
  { eager: true }
);

export interface PhotoCredit {
  title: string;
  page: string;
  artist: string;
  license: string;
}

export interface Photo {
  src: ImageMetadata;
  alt: string;
  credit: PhotoCredit;
}

const alts = {
  "palau/hero": {
    en: "Jungle-covered Rock Islands scattered across a turquoise lagoon in Palau",
    es: "Rock Islands cubiertas de selva dispersas por una laguna turquesa en Palaos",
  },
  "palau/koror": {
    en: "Palau’s Rock Islands seen from the air",
    es: "Las Rock Islands de Palaos vistas desde el aire",
  },
  "palau/manta": {
    en: "Manta ray gliding overhead in Palau",
    es: "Mantarraya planeando sobre nosotros en Palaos",
  },
  "palau/jellyfish": {
    en: "Snorkeller swimming among golden jellyfish in Jellyfish Lake",
    es: "Una persona haciendo snorkel entre medusas doradas en el Jellyfish Lake",
  },
  "palau/ngardmau": {
    en: "Ngardmau Waterfall pouring through tropical rainforest",
    es: "La cascada de Ngardmau cayendo entre la selva tropical",
  },
  "palau/rock": {
    en: "Ngerukewid islands and their reefs from the air",
    es: "Las islas Ngerukewid y sus arrecifes desde el aire",
  },
  "palau/fauna-manta": {
    en: "Manta ray in German Channel, Palau",
    es: "Mantarraya en German Channel, Palaos",
  },
  "palau/fauna-greyreef": {
    en: "Reef shark cruising over Blue Corner",
    es: "Tiburón de arrecife patrullando Blue Corner",
  },
  "palau/fauna-jacks": {
    en: "A dense school of jacks in the blue at Blue Corner",
    es: "Un denso banco de jureles en el azul de Blue Corner",
  },
  "palau/fauna-coral": {
    en: "Orange soft coral on a reef wall",
    es: "Coral blando naranja en una pared de arrecife",
  },
  "indonesia/hero": {
    en: "Green ridges and three bays seen from the Padar Island viewpoint, Komodo National Park",
    es: "Crestas verdes y tres bahías desde el mirador de la isla de Padar, Parque Nacional de Komodo",
  },
  "indonesia/orangutan": {
    en: "Bornean orangutan in the forest of Tanjung Puting",
    es: "Orangután de Borneo en la selva de Tanjung Puting",
  },
  "indonesia/starling": {
    en: "Bali starling, white with a blue mask, perched on a branch",
    es: "Estornino de Bali, blanco con antifaz azul, posado en una rama",
  },
  "indonesia/komodo": {
    en: "Close-up of a Komodo dragon’s head with its forked tongue out",
    es: "Primer plano de un dragón de Komodo sacando la lengua bífida",
  },
  "indonesia/fauna-orangutan": {
    en: "Orangutan mother and infant on a branch in Tanjung Puting",
    es: "Orangutana con su cría en una rama en Tanjung Puting",
  },
  "indonesia/fauna-proboscis": {
    en: "Proboscis monkey with its long nose",
    es: "Mono narigudo con su larga nariz",
  },
  "indonesia/fauna-wagler": {
    en: "Wagler’s pit viper coiled on a branch",
    es: "Víbora de foseta de Wagler enroscada en una rama",
  },
  "indonesia/fauna-komodo": {
    en: "Komodo dragon resting with its mouth open",
    es: "Dragón de Komodo descansando con la boca abierta",
  },
  "honduras/hero": {
    en: "Roatán’s forested coast and barrier reef seen from the air",
    es: "La costa boscosa de Roatán y su barrera de coral vistas desde el aire",
  },
  "honduras/roatan": {
    en: "Nurse shark resting among corals in the Bay Islands",
    es: "Tiburón nodriza descansando entre corales en las Islas de la Bahía",
  },
  "honduras/whaleshark": {
    en: "Whale shark feeding just below the surface with its mouth open",
    es: "Tiburón ballena alimentándose bajo la superficie con la boca abierta",
  },
  "honduras/cochinos": {
    en: "A tiny palm-covered cay in Cayos Cochinos",
    es: "Un diminuto cayo cubierto de palmeras en Cayos Cochinos",
  },
  "honduras/beach": {
    en: "West Bay Beach on Roatán with its wooden pier",
    es: "La playa de West Bay, en Roatán, con su muelle de madera",
  },
  "honduras/fauna-whaleshark": {
    en: "Whale shark’s spotted flank in open water",
    es: "El costado moteado de un tiburón ballena en aguas abiertas",
  },
  "honduras/fauna-iguana": {
    en: "Utila iguana with its spiny crest, basking on a log",
    es: "Iguana de Utila con su cresta espinosa, tomando el sol sobre un tronco",
  },
  "honduras/fauna-hawksbill": {
    en: "Hawksbill turtle swimming over a coral reef",
    es: "Tortuga carey nadando sobre un arrecife de coral",
  },
  "honduras/fauna-eagleray": {
    en: "Spotted eagle ray gliding over a reef",
    es: "Mantarraya águila planeando sobre un arrecife",
  },
  "philippines/hero": {
    en: "Boat entering the cave mouth of the Puerto Princesa Underground River",
    es: "Una barca entrando en la cueva del río subterráneo de Puerto Princesa",
  },
  "philippines/river": {
    en: "Emerald water and palms in Puerto Princesa Subterranean River National Park",
    es: "Agua esmeralda y palmeras en el Parque Nacional del Río Subterráneo de Puerto Princesa",
  },
  "philippines/tarsier": {
    en: "Philippine tarsier with huge round eyes clinging to a branch",
    es: "Tarsero filipino de enormes ojos redondos agarrado a una rama",
  },
  "philippines/ticao": {
    en: "Green hills of Ticao Island rising from deep blue water",
    es: "Las colinas verdes de la isla de Ticao sobre un mar azul intenso",
  },
  "philippines/samal": {
    en: "Fruit bats roosting at a cave mouth on Samal Island, one in flight",
    es: "Murciélagos frugívoros en la entrada de una cueva de la isla de Samal, uno en vuelo",
  },
  "philippines/fauna-tarsier": {
    en: "Philippine tarsier gripping a branch in Bohol",
    es: "Tarsero filipino agarrado a una rama en Bohol",
  },
  "philippines/fauna-croc": {
    en: "Young Philippine crocodile resting on leaf litter",
    es: "Cocodrilo filipino joven descansando sobre la hojarasca",
  },
  "philippines/fauna-manta": {
    en: "Oceanic manta ray seen from below",
    es: "Manta oceánica vista desde abajo",
  },
  "philippines/fauna-clam": {
    en: "Giant clam with its mantle open on the reef",
    es: "Almeja gigante con el manto abierto sobre el arrecife",
  },
} satisfies Record<string, Record<Locale, string>>;

export type PhotoKey = keyof typeof alts;

/** Resolve a photo key like "palau/hero" to its bundled image, alt text and licence credit. */
export function photo(key: PhotoKey, locale: Locale): Photo {
  const file = files[`../assets/trips/${key}.jpg`];
  const credit = (credits as Record<string, PhotoCredit>)[key];
  if (!file || !credit) throw new Error(`Missing photo or credit for "${key}"`);
  return { src: file.default, alt: alts[key][locale], credit };
}
