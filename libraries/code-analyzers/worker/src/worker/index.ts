import { createServer } from 'vite'
import { ViteNodeServer } from 'vite-node/server'
import { ViteNodeRunner } from 'vite-node/client'
import { resolve } from 'path'

export type RunParams = {
  fileName: string
  basePath: string
  method?: string
  methodParameter?: any
  voidResult?: boolean
}

export async function run(params: RunParams) {

  const { runner, server } = await startViteNode(params)

  let module = await runner.executeFile(resolve(params.basePath, params.fileName))

  await server.close()

  if (params.method && module[params.method]) {
    let result = module[params.method](params.methodParameter)
    if (result?.then) {
      result = await result
    }
    if (!params.voidResult) {
      return result
    }
  }
}


async function startViteNode({ basePath }: RunParams) {
  const server = await createServer({
    root: basePath,
    optimizeDeps: {
      // It's recommended to disable deps optimization
      disabled: true,
    },
  })
  await server.pluginContainer.buildStart({})

  const node = new ViteNodeServer(server)
  const runner = new ViteNodeRunner({
    root: server.config.root,
    base: server.config.base,
    // when having the server and runner in a different context,
    // you will need to handle the communication between them
    // and pass to this function
    fetchModule(id) {
      return node.fetchModule(id)
    },
    resolveId(id, importer) {
      return node.resolveId(id, importer)
    },
  })

  await runner.executeId('/@vite/env')

  return {
    runner,
    server,
  }
}