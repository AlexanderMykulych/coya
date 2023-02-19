import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`,
    },
  },
  build: {
    target: 'node16',
    lib: {
      formats: ['es'],
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, './index.ts'),
      name: 'coya-connectors-runner',
      // the proper extensions will be added
      fileName: 'index',
    },
  },
})
