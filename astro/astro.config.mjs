import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import sanity from 'astro-sanity';

// https://astro.build/config
export default defineConfig({
  site: 'https://roberta-caracol.netlify.app/',
  // Your public domain, e.g.: https://my-site.dev/
  integrations: [
    sitemap(),
    sanity({
      projectId: 'v4tesyqj',
      dataset: 'production',
      apiVersion: 'v2021-03-25',
      useCdn: true,
    }),
  ],
});
