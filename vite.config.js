import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Usar rutas relativas para que funcione correctamente en producción.
  build: {
    rollupOptions: {
      input: 'index.html', // Esto ya no necesita la barra inicial.
    },
  },
});
