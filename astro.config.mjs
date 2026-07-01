import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mon-site-seo.vercel.app',
  integrations: [sitemap()],
});
