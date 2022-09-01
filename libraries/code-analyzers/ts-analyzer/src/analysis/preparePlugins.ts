import { AnalysisContext } from './context/analysisContext';
import { createNestedContext } from "./context/createNestedContext";
import { AnalysisPlugin } from './plugins/types';


export async function preparePlugins(plugins: AnalysisPlugin[], context: AnalysisContext): Promise<{ plugin: AnalysisPlugin; context: AnalysisContext; }[]> {
  const result: { plugin: AnalysisPlugin; context: AnalysisContext; }[] = [];

  for await (const plugin of plugins) {
    const folders = await plugin.matchFolders(context);

    folders.forEach(folder => result.push({
      context: createNestedContext(folder, context),
      plugin,
    }));
  }

  return result;
}
