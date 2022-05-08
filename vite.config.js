import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path';

const resolvePath = (pathAlias) => {
  return path.resolve(__dirname, `./src/${pathAlias}`)
}

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolvePath('')
    }
  },
  server:{
    port: 3010
  }
})
