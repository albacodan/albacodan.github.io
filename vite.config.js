import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ¡CRÍTICO! Para repositorios de dominio (albacodan.github.io),
  // el base path debe ser solo una barra.
  base: "/",
})
