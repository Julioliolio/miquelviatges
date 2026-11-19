// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Spanish is the default language. These keep URLs from the first,
// English-default version of the site working.
const tripSlugs = {
  palau: 'palaos',
  indonesia: 'indonesia',
  honduras: 'honduras',
  philippines: 'filipinas',
};

const base = '/miquelviatges';

// Astro prefixes the base onto the source paths but not the destinations.
const legacyRedirects = Object.fromEntries(
  Object.entries({
    '/es': '/',
    '/es/creditos': '/creditos/',
    '/credits': '/en/credits/',
    ...Object.fromEntries(
      Object.entries(tripSlugs).flatMap(([en, es]) => [
        [`/trips/${en}`, `/en/trips/${en}/`],
        [`/es/viajes/${es}`, `/viajes/${es}/`],
      ])
    ),
  }).map(([from, to]) => [from, `${base}${to}`])
);

export default defineConfig({
  site: 'https://julioliolio.github.io',
  base,
  redirects: legacyRedirects,
});
