import { AnalysisContext } from "../../../context/analysisContext";
import type { FileText } from "../../../types";
import { plugins } from "./plugins";

export async function processFile(file: FileText, context: AnalysisContext) {
  const data = { file, context }
  const pluginAwaitables = plugins.map(async x =>
    Promise.resolve({
      plugin: x,
      isMatch: await x.isMatch(data),
    }),
  )

  const pluginsResults = await Promise.all(pluginAwaitables)

  const plugin = pluginsResults.find(x => x.isMatch)?.plugin

  if (plugin) {
    return await plugin.processFile(data)
  }

  return file
}