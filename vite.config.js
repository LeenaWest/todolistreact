import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/todolistreact/', 
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  }
})