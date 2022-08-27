import { AnalysisContext, createContext } from './context/analysisContext'
import { createNestedContext } from "./context/createNestedContext"
import { AnalysisPlugin, getAnalysisPlugins } from './plugins/getAnalysisPlugins'
import { CodeInfo } from './types'

export async function analyze(basePath: string): Promise<CodeInfo[]> {
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

async function preparePlugins(plugins: AnalysisPlugin[], context: AnalysisContext):
  Promise<{ plugin: AnalysisPlugin, context: AnalysisContext }[]> {
  const result: {plugin: AnalysisPlugin, context: AnalysisContext}[] = []

  for await (const plugin of plugins) {
    const folders = await plugin.matchFolders(context)

    folders.forEach(folder => result.push({
      context: createNestedContext(folder, context),
      plugin,
    }))
  }

  return result
}