import { progress } from '../progress/progress'
import { createContext } from './context/analysisContext'
import { getAnalysisPlugins } from './plugins/getAnalysisPlugins'
import { preparePlugins } from './preparePlugins'
import type { CodeInfo } from './types'

async function _analyze(basePath: string): Promise<CodeInfo[]> {
  const context = await createContext(basePath)

  const plugins = getAnalysisPlugins()

  const preparedPluginsWithContext = await preparePlugins(plugins, context)

  const initTasks = preparedPluginsWithContext
    .map(({ plugin, context }) => plugin.init && plugin.init(context))

  await Promise.all(initTasks)

  const runTasks = preparedPluginsWithContext
    .map(({ plugin, context }) => plugin.run(context))

  await Promise.all(runTasks)

  return context.result
}

export const analyze = progress('analyze', _analyze)