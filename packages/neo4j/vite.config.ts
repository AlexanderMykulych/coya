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
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, './index.ts'),
      name: 'coya-neo4j',
      // the proper extensions will be added
      fileName: 'index',
    },
    rollupOptions: {
      external: ['neo4j-driver'],
    },
  },
})
