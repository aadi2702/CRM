import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // ✅ Accept connections from any external device
    allowedHosts: 'all', // ✅ Accept all hostnames like ngrok
    origin: 'http://localhost:5173', // Optional fallback origin
  },
})
