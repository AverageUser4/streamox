import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: "/src",
      features: "/src/features",
      pages: "/src/pages",
      assets: "/src/assets",
      utils: "/src/utils",
      hooks: "/src/hooks",
      data: "/src/data",
    },
  },
})
