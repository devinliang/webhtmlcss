import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  root: 'src',
  build: {
    outDir: '../dist',
  },
  // 針對 GitHub Pages 的路徑設定，替換為您的儲存庫名稱
  base: '/webhtmlcss/', 
})