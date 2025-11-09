import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@api': path.resolve('./src/api'),
      '@assets': path.resolve('./src/assets'),
      '@components': path.resolve('./src/components'),
      '@pages': path.resolve('./src/pages'),
      '@styles': path.resolve('./src/styles'),
    },
  },
});
