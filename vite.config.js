import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/fala-elza/', // O nome do repositório no GitHub
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Elza Fala 📢',
        short_name: 'ElzaTalk',
        description: 'Aplicativo de comunicação com a Elza',
        start_url: '/', // <- Corrigido aqui
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'android-chrome-192x192.png', // <- Corrigido aqui
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'android-chrome-512x512.png', // <- Corrigido aqui
            sizes: '512x512',
            type: 'image/png',
          }
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        navigateFallback: 'index.html', // <- Corrigido aqui
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
});
