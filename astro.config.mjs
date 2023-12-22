import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import { loadEnv } from 'vite';

const env = loadEnv('production', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  integrations: [],
  output: "server",
  adapter: netlify()
});
