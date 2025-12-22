// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwind()],
  },
  // GitHub Pages用の設定
  site: 'https://menma22.github.io',
  base: '/portfolio',
});