import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/talk-elza/',

  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        id: '/talk-elza/',
        name: 'Elza Fala 📢',
        short_name: 'ElzaTalk',
        description: 'Aplicativo de receitas e utilidades da Elza',
        start_url: '/talk-elza/',
        scope: '/talk-elza/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
    }),
  ],
});
