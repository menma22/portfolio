// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwind()],
  },
  // あなたのGitHubアカウント名とリポジトリ名に合わせて変更してください
  site: 'https://mahiro-account.github.io',
  base: '/portfolio-glass', // リポジトリ名が 'portfolio-glass' の場合
});