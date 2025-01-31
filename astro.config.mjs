// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static', // or 'server' if using SSR
  vite: {
    server: {
      allowedHosts: ['formygf.ariestwn.com'],
      host: true
    }
  }
});