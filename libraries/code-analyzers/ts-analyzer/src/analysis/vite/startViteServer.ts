import path from 'path'
import { createServer } from 'vite'
import { ViteNodeServer } from 'vite-node/server'
import { ViteNodeRunner } from 'vite-node/client'
import { tsAnalyzerVitePlugin } from './tsAnalyzerVitePlugin'

interface StartViteServerParams {
  path: string
  entry: string
}

export const executeFile = async(params: StartViteServerParams) => {
  const server = await createServer({
    optimizeDeps: {
      // It's recommended to disable deps optimization
      disabled: true,
    },
    base: params.path,
    root: params.path,
    // configFile: path.resolve(params.path, 'vite.config.ts'),
    plugins: await tsAnalyzerVitePlugin(),
  })

  try {
    await server.pluginContainer.buildStart({})

    // create vite-node server
    const node = new ViteNodeServer(server)

    // create vite-node runner
    const runner = new ViteNodeRunner({
      root: server.config.root,
      base: server.config.base,
      fetchModule(id) {
        return node.fetchModule(id)
      },
      resolveId(id, importer) {
        return node.resolveId(id, importer)
      },
    })

    // execute the file
    const res = await runner.executeFile(path.resolve(params.path, params.entry))
    return {
      executionResult: res,
    }
  }
  finally {
    // close the vite server
    await server.close()
  }
}
