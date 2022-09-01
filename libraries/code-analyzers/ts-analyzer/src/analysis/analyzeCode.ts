import { progress } from "../progress/progress";
import { createContextForOneFile } from "./context/analysisContext";
import { getAnalysisPlugins } from "./plugins/getAnalysisPlugins";
import { preparePlugins } from "./preparePlugins";
import type { CodeInfo } from "./types";

export type AnalyzeCodeData = {
  code: string
  fileName: string
}

async function _analyzeCode({ code, fileName }: AnalyzeCodeData): Promise<CodeInfo[]> {
  const context = await createContextForOneFile({
    code,
    fileName,
  })

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

export const analyzeCode = progress('analyzeCode', _analyzeCode)