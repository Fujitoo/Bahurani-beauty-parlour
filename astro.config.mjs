import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// TODO: Replace 'your-github-username' with your actual GitHub username
// and 'bahurani-website' with your actual repository name
const githubPagesBase = '/bahurani-website/';

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
