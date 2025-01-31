// astro.config.mjs
import { defineConfig } from 'astro/config'

export default defineConfig({
  vite: {
    server: {
      allowedHosts: [
        'formygf.ariestwn.com', // Your domain
        'localhost' // Keep localhost for development
      ],
      host: true, // Allow external access
      port: 4321 // Keep your existing port
    }
  }
})