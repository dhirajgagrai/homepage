import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://gagrai.com',
  integrations: [sitemap()],
  output: 'server',
  adapter: vercel(),
  redirects: {
    '/linux-kernel-dev-setup': {
      status: 302,
      destination: '/posts/linux-kernel-dev-setup',
    },
  },
});
