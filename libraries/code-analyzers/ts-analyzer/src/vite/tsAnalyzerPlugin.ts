import type { Plugin } from 'vite'

export function tsAnalyzerPlugin(): Plugin {
  return {
    name: 'flow-analyzer-plugin',
    transform,
  }
}
