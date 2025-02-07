import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // O el valor que necesites
  build: {
    rollupOptions: {
      input: '/index.html',
    },
  },
});
