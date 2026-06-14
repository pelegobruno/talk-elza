import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
<<<<<<< HEAD
  base: '/talk-elza/', 
=======
  base: '/talk-elza/', // ⚡ Tem que ser EXATAMENTE o nome do seu repositório
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
<<<<<<< HEAD
      injectRegister: 'auto',
      // Aqui nós configuramos o manifesto para o plugin gerar sozinho
      manifest: {
        name: 'Culinária Elza',
        short_name: 'ElzaTalk',
        description: 'Aplicativo de receitas e utilidades da Elza',
        start_url: '/talk-elza/',
=======
      manifest: {
        name: 'Elza Fala 📢',
        short_name: 'ElzaTalk',
        description: 'Aplicativo de receitas e utilidades da Elza',
        start_url: '/talk-elza/', // ✅ Corrigido
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
          {
<<<<<<< HEAD
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
=======
            src: 'vite.svg', // Está no "public"
            sizes: '192x192',
            type: 'image/svg+xml',
          },
        ],
      },
    }),
  ],
});
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
