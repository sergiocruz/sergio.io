import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sergio.io',
  integrations: [
    react(),
    sitemap()
  ],
  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "./src/styles/global.css";`
        }
      }
    }
  },
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  }
});