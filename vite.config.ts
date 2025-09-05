import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  server: {
    port: 5173,
    host: '0.0.0.0', // Listen on all network interfaces
    strictPort: true,
    open: true,
    cors: true, // Enable CORS for all origins
    allowedHosts: [
      'physically-forty-watts-stan.trycloudflare.com',
      'refugees-forces-cold-chapel.trycloudflare.com',
      'localhost',
      '127.0.0.1'
    ],
    headers: {
      'Access-Control-Allow-Origin': '*', // Allow all origins
      'Access-Control-Allow-Methods': 'GET,OPTIONS,PUT,POST,DELETE',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
    hmr: {
      clientPort: 443, // Important for Cloudflare Tunnel
      protocol: 'wss', // Use WebSocket for HMR
      host: 'localhost',
      port: 5173
    }
  },
  preview: {
    port: 5173,
    host: '0.0.0.0',
    strictPort: true
  }
})
