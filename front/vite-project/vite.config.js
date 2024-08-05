import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Configuración para el directorio público
    // Asegúrate de que 'public' esté correctamente especificado
    // Por defecto, Vite incluye la carpeta 'public' en el directorio de salida
  },
  // Si tienes un directorio público distinto o personalizado, especifícalo aquí
  publicDir: 'public', // Asegúrate de que esta carpeta esté incluida
});
