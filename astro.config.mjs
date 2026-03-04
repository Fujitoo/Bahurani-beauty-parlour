import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// GitHub Pages base path - matches repository name
const githubPagesBase = '/Bahurani-beauty-parlour/';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://bahuranibeauty.com',
  base: githubPagesBase,
  compressHTML: true,
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro']
          }
        }
      }
    }
  }
});
