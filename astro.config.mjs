// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  vite: {
    build: {
      // Enable chunk splitting for better caching
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            // Split vendor code into separate chunks
            vendor: [/node_modules/],
          },
        },
      },
    },
    server: {
      allowedHosts: ['formygf.ariestwn.com'],
      host: true
    }
  },
  // Enable compression
  compressHTML: true,
  // Build with source maps disabled for production
  build: {
    sourcemap: false,
  }
});