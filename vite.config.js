import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Works both locally and on GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/react_website/' : '/react-project/',
})
