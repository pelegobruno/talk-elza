import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/talk-elza/', // 👈 precisa ser o nome do repo, com barra certinha
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Elza Fala 📢',
        short_name: 'Elza Talk',
        start_url: '/talk-elza/', // 👈 precisa ter o caminho correto
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon',
          },
        ],
      },
    }),
  ],
});
