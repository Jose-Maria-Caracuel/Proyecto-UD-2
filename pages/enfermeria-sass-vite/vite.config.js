import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './', // usar rutas relativas en el build
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mapa: resolve(__dirname, 'mapa_C.html'),
        hoja: resolve(__dirname, 'hoja_medica.html')
      }
    }
  }
})
