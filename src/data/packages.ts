// Placeholder expedition data — swap for real content when available.
// Images are hotlinked Unsplash placeholders; replace with the agency's photography.

export interface TravelPackage {
  country: string;
  title: string;
  dates: string;
  price: string;
  availability: "open" | "few" | "soldout";
  availabilityLabel: string;
  image: string;
  alt: string;
}

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

export const packages: TravelPackage[] = [
  {
    country: "Mongolia",
    title: "Eagle hunters of the Altai",
    dates: "October 3–14, 2026",
    price: "€2,650",
    availability: "few",
    availabilityLabel: "4 places left",
    image: u("photo-1469474968028-56623f02e42e"),
    alt: "Golden light over remote mountains",
  },
  {
    country: "Ethiopia",
    title: "Salt caravans of the Danakil",
    dates: "November 20–29, 2026",
    price: "€2,190",
    availability: "open",
    availabilityLabel: "Places available",
    image: u("photo-1509316785289-025f5b846b35"),
    alt: "Arid desert plain beneath sandstone towers",
  },
  {
    country: "Pakistan",
    title: "Winter light in the Hunza Valley",
    dates: "February 6–16, 2027",
    price: "€2,480",
    availability: "open",
    availabilityLabel: "Places available",
    image: u("photo-1506905925346-21bda4d32df4"),
    alt: "Snowbound peak under clear sky",
  },
  {
    country: "Peru",
    title: "Q'eswachaka, the last Inca bridge",
    dates: "June 8–17, 2027",
    price: "€1,940",
    availability: "soldout",
    availabilityLabel: "Sold out",
    image: u("photo-1526392060635-9d6019884377"),
    alt: "Machu Picchu wrapped in cloud",
  },
  {
    country: "Madagascar",
    title: "Zebu roads and the vanilla coast",
    dates: "July 14–25, 2027",
    price: "€2,320",
    availability: "open",
    availabilityLabel: "Places available",
    image: u("photo-1447752875215-b2761acb3c5d"),
    alt: "Sunlight through dense forest",
  },
  {
    country: "Kyrgyzstan",
    title: "Horse games of the high pastures",
    dates: "September 2–11, 2027",
    price: "€1,780",
    availability: "few",
    availabilityLabel: "2 places left",
    image: u("photo-1501785888041-af3ef285b470"),
    alt: "Alpine lake beneath jagged ridges",
  },
];

export const heroImages = [
  {
    image: u("photo-1519681393784-d120267933ba").replace("w=1400", "w=2000"),
    alt: "Starlit snow mountains at night",
  },
  {
    image: u("photo-1476514525535-07fb3b4ae5f1").replace("w=1400", "w=2000"),
    alt: "Canoe crossing a still mountain lake",
  },
  {
    image: u("photo-1533105079780-92b9be482077").replace("w=1400", "w=2000"),
    alt: "Coastal cliffs under moving cloud",
  },
];
