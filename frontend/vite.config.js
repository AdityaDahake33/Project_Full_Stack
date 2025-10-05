import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    headers: {
      "Content-Security-Policy": `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval';
        style-src 'self' 'unsafe-inline';
        media-src 'self' https://ik.imagekit.io data: blob:;
        connect-src 'self' http://localhost:3000 https://ik.imagekit.io;
        img-src 'self' data: https: blob:;
        font-src 'self' data:;
      `.replace(/\s+/g, ' ').trim()
    }
  }
})
