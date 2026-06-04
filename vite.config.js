import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // <-- Fix the typo here

export default defineConfig({
  base: '/portfolio/', 
  plugins: [react()],
})