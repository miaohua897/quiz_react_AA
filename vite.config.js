import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// vite.config.js

import eslint from 'vite-plugin-eslint';


// vite.config.js

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    eslint({
      lintOnStart: true,
      failOnError: mode === "production"
    })
  ],
  server: {
    open: true
  }
}))