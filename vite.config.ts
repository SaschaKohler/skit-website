import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_WEBHOOK_URL': JSON.stringify(
      process.env.VITE_WEBHOOK_URL
    ),
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'esnext',
    minify: 'esbuild',
  },
})
