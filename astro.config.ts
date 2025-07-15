import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import Critters from 'critters';

export default defineConfig({
  site: 'https://sergio.io',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [
      tailwindcss(),
      // Only run critters during production builds
      {
        name: 'critters',
        apply: 'build',
        async generateBundle(options, bundle) {
          console.log('🔍 Critters plugin is running...');
          console.log('Bundle keys:', Object.keys(bundle));
          
          const critters = new Critters({
            path: options.dir || 'dist',
            publicPath: '',
            external: true,
            inlineFonts: true,
            preloadFonts: true,
            noscriptFallback: true,
            inlineThreshold: 0,
            minimumExternalSize: 0,
            pruneSource: false,
            mergeStylesheets: true,
            additionalStylesheets: [],
            keyframes: 'critical',
            compress: true,
            logLevel: 'info',
          });

          // Process all HTML files in the bundle
          let processedCount = 0;
          for (const [fileName, file] of Object.entries(bundle)) {
            if (fileName.endsWith('.html') && file.type === 'asset' && typeof file.source === 'string') {
              try {
                console.log(`📄 Processing ${fileName}...`);
                const processed = await critters.process(file.source);
                file.source = processed;
                processedCount++;
                console.log(`✅ Successfully processed ${fileName}`);
              } catch (error) {
                console.warn(`❌ Failed to process ${fileName} with critters:`, error);
              }
            }
          }
          console.log(`🎉 Critters processed ${processedCount} HTML files`);
        },
      },
    ],
  },
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
