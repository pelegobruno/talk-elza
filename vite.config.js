import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/talk-elza/', // ⚡ Tem que ser EXATAMENTE o nome do seu repositório
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Elza Fala 📢',
        short_name: 'ElzaTalk',
        description: 'Aplicativo de receitas e utilidades da Elza',
        start_url: '/talk-elza/', // ✅ Corrigido
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'vite.svg', // Está no "public"
            sizes: '192x192',
            type: 'image/svg+xml',
          },
        ],
      },
    }),
  ],
});
