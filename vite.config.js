import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/albacodan.github.io/", // <--- IMPORTANTE: Nombre exacto de tu repositorio
})
