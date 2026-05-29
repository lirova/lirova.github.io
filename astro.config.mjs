// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Set this to your published URL before deploying.
  //  - Custom domain:        https://yourdomain.com
  //  - GitHub user/org page: https://<username>.github.io   (leave `base` unset)
  //  - GitHub project page:  https://<username>.github.io   + set `base: '/portfolio'`
  site: 'https://lirova.github.io',
  // base: '/portfolio',  // not needed — root user page (lirova.github.io)
});
