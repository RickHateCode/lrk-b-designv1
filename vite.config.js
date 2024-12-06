import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/lrk-b-designv1",

  server: {
    host: '0.0.0.0', // Allows access from any device on the local network
    port: 3000, // or any other port you want to use
  },
})


