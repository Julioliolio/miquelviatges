import { photo, type Photo, type PhotoKey } from "./photos";
import type { Alternates, Locale } from "../i18n/ui";
import { locales, routes } from "../i18n/ui";
import { tripsEn } from "./trips-en";
import { tripsEs } from "./trips-es";

export type { Photo, PhotoCredit } from "./photos";

interface DaySource {
  label: string;
  title?: string;
  items: string[];
}

interface StageSource {
  days: string;
  place: string;
  title: string;
  photo: PhotoKey;
  intro?: string;
  items?: string[];
  schedule?: DaySource[];
}

interface SpeciesSource {
  name: string;
  note?: string;
  photo?: PhotoKey;
}

/** Trip content as written for one language; photos are referenced by key. */
export interface TripSource {
  /** Stable id shared by every language version of the trip. */
  id: string;
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
  hero: PhotoKey;
  stages: StageSource[];
  fauna: SpeciesSource[];
  facts?: string[];
}

export type Day = DaySource;
export type Stage = Omit<StageSource, "photo"> & { photo: Photo };
export type Species = Omit<SpeciesSource, "photo"> & { photo?: Photo };
export type Trip = Omit<TripSource, "hero" | "stages" | "fauna"> & {
  locale: Locale;
  hero: Photo;
  stages: Stage[];
  fauna: Species[];
};

const sources: Record<Locale, TripSource[]> = { en: tripsEn, es: tripsEs };

function resolve(trip: TripSource, locale: Locale): Trip {
  return {
    ...trip,
    locale,
    hero: photo(trip.hero, locale),
    stages: trip.stages.map((s) => ({ ...s, photo: photo(s.photo, locale) })),
    fauna: trip.fauna.map((s) => ({ ...s, photo: s.photo && photo(s.photo, locale) })),
  };
}

export function getTrips(locale: Locale): Trip[] {
  return sources[locale].map((t) => resolve(t, locale));
}

export const tripUrl = (trip: Trip) => routes.trip(trip.locale, trip.slug);

/** The same trip's URL in every language. */
export function tripAlternates(id: string): Alternates {
  return Object.fromEntries(
    locales.map((l) => {
      const t = sources[l].find((s) => s.id === id);
      if (!t) throw new Error(`Trip "${id}" missing in ${l}`);
      return [l, routes.trip(l, t.slug)];
    })
  ) as Alternates;
}

export const heroSlides = (locale: Locale) => {
  const [palau, indonesia, , philippines] = getTrips(locale);
  return [palau.hero, indonesia.hero, philippines.hero];
};
