import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`,
    },
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, './index.ts'),
      name: 'coya-gitlab-connector',
      // the proper extensions will be added
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        'axios',
      ],
    },
  },
})
