import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    'oopas.onrender.com',
    'institutionforgiftedchildren.org',
    'www.institutionforgiftedchildren.org',
  },
})
