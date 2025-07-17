import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import playformInline from '@playform/inline';

export default defineConfig({
  site: 'https://sergio.io',
  integrations: [
    react(),
    sitemap(),
    playformInline({
      Beasties: {
        path: 'dist',
        publicPath: '',
        external: true,

        width: 1300,
        height: 800,

        inlineFonts: true,
        preloadFonts: true,
        fontFaceInline: true,
        noscriptFallback: true,

        inlineThreshold: 2048,
        minimumExternalSize: 1024,

        pruneSource: true,
        mergeStylesheets: true,
        keyframes: 'critical',
        compress: true,
        logLevel: 'info',
        
        // Additional options to improve critical CSS extraction
        additionalStylesheets: [
          'src/styles/globals.css'
        ],
        ignore: {
          atrule: ['@font-face'],
          rule: [/\.sr-only/]
        }
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
