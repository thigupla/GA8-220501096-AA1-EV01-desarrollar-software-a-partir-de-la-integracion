import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Cargar variables de entorno según el modo (development/production)
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    define: {
      // Hacemos disponible process.env para compatibilidad, pero asignamos las variables cargadas
      // Esto asegura que si el código busca process.env.VITE_API_KEY, lo encuentre.
      'process.env': env
    }
  };
});
