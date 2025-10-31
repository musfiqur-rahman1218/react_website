import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ✅ Correct configuration for both local and GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production'
    ? '/react_website/'   // 👈 your GitHub repo name
    : '/',
});
