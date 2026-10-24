import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // No Pages, os arquivos são publicados dentro de /nome-do-repositorio/.
  // Localmente continua funcionando na raiz, inclusive no preview.
  base: process.env.BASE_PATH || './',
  build: { target: 'es2022' },
});
