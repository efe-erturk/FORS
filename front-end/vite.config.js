import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/

export default defineConfig({
  //setup for docker container.
  server: {
    host: true,  // Listen on all addresses, including Docker's
    port: 5173,  // Standard Vite port
    watch: {
      usePolling: true // Needed for hot reload in some Docker environments (Windows/WSL)
    }
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
