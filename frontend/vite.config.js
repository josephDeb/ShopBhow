import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: { manifest: true, outDir: './dist'},
  base:  '/',
  root: './src',
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8088/",
        secure: false
      }
    }
  }
})
