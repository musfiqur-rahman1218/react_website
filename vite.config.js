import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-project/', // 👈 update this to match your new repo name
  plugins: [react()],
})
