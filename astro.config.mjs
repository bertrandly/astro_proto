import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import { loadEnv } from 'vite';

import auth from "auth-astro";
import Google from "@auth/core/providers/google"

const env = loadEnv('production', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  integrations: [auth(
      {
        providers: [
          Google({
            clientId: env.GOOGLE_ID,
            clientSecret: env.GOOGLE_SECRET
          })
        ]
      }
  )],
  output: "server",
  adapter: netlify()
});
