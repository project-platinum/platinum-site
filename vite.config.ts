import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base must match the repository name for GitHub Pages to work correctly
  base: '/platinum-site/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})