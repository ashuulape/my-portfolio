import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),  ViteImageOptimizer({
      webp: { quality: 80 },
      png: { quality: 80 },
      jpeg: { quality: 80 },
    }),],
  assetsInclude: ['**/*.gltf', '**/*.glb'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
})


