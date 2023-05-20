import type { Plugin } from "vite";
import { tsAnalyzerPlugin, TsAnalyzerPluginConfig } from "./tsAnalyzerPlugin"
import script from './logScript.js'

const virtualModuleId = 'virtual:ts-analyzer-module'
const resolvedVirtualModuleId = '\0' + virtualModuleId

export function vitestAnalyzerPlugin(config?: TsAnalyzerPluginConfig): Plugin {
  const plugin = tsAnalyzerPlugin({
    ...config,
    transform: {
      startInject: args => `__logStart(${args})`,
      endInject: args => `__logEnd(${args})`,
      afterTransform: code => `import { __logStart, __logEnd } from '${virtualModuleId}';
${code}`,
      skipTransformation: (id) => id.indexOf(virtualModuleId) > -1,
    }
  })

  return {
    ...plugin,
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    async load(id) {
      if (id === resolvedVirtualModuleId) {
        return await script
      }
    }
  }
}