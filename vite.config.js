import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import sitemapPlugin from './vite-sitemap-plugin.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // SVGR options
        icon: true,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
      },
    }),
    sitemapPlugin({
      hostname: 'https://lama.school',
      routes: [
        '/',
        '/privacy-policy',
        '/offer-agreement',
        '/user-agreement',
        '/about',
        '/team',
        '/pricing',
        '/contact',
        '/articles/1',
        '/articles/2',
        '/articles/3',
        '/articles/4',
        '/articles/5',
        '/test-error'
      ]
    })
  ],
  server: {
    port: 3000,
    open: true,
    proxy: {
      // Больше не нужны прокси - используем прямое подключение к YDB!
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  publicDir: 'public',
  base: '/'
})