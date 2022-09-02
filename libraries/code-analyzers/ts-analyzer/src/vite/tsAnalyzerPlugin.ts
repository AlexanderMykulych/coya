import { relative } from 'path'
import type { Plugin } from 'vite'
import { transform, TransformConfig } from './transform'

export type TsAnalyzerPluginConfig = {
  basePath?: string
  transform?: TransformConfig
}

export function tsAnalyzerPlugin(config?: TsAnalyzerPluginConfig): Plugin {
  return {
    name: 'flow-analyzer-plugin',
    transform(code, id) {
      if (config?.basePath) {
        id = relative(config.basePath, id)
      }
      return transform(code, id, config?.transform)
    },
  }
}
