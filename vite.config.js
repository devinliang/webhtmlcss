import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        www: resolve(__dirname, 'src/www.html'),
      },
    },
  },
  // 針對 GitHub Pages 的路徑設定，替換為您的儲存庫名稱
  base: '/webhtmlcss/', 
})