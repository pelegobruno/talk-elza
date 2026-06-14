import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/talk-elza/', 
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      // Aqui nós configuramos o manifesto para o plugin gerar sozinho
      manifest: {
        name: 'Culinária Elza',
        short_name: 'ElzaTalk',
        description: 'Aplicativo de receitas e utilidades da Elza',
        start_url: '/talk-elza/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'vite.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          }
        ]
      },
      devOptions: {
        enabled: false // Desliga o PWA no localhost para o erro não aparecer!
      }
    }),
  ],
});