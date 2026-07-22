import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { markdownPlugin } from './src/markdown-plugin.js'

// https://vite.dev/config/
export default defineConfig({
  // Local server on a port above 4000.
  server: {
    port: 5174,
    // Use next free port if 5174 happens to be taken.
    strictPort: false,
  },
  plugins: [markdownPlugin(), tailwindcss()],
})
