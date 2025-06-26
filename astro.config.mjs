import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sergio.io',
  integrations: [
    react(),
    sitemap()
  ],
  vite: {
    css: {
      transformer: 'postcss'
    }
  },
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  }
});