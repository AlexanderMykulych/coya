import type { Plugin as VitePlugin } from 'vite'
import vue from '@vitejs/plugin-vue'

export async function tsAnalyzerVitePlugin(): Promise<VitePlugin[]> {
  return [
    <VitePlugin>{
      name: 'ts-analyzer-coya',
      enforce: 'pre'
    },
    vue({
      isProduction: true,
    }),
  ]
}
