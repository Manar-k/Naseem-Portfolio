import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Netlify/Vercel serve at the domain root ('/'); GitHub Pages serves under
// the repo name. NETLIFY is set automatically during Netlify builds.
export default defineConfig({
  base: process.env.NETLIFY ? '/' : '/Naseem-Portfolio/',
  plugins: [react()],
})
