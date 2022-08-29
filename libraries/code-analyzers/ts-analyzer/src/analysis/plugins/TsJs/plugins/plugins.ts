import type { AnalyzePackageJsonOptions } from "./types";
import vue2Plugin from "./vue2/vue2Plugin";
import vue3Plugin from "./vue3/vue3Plugin";

export const plugins = [
  vue3Plugin,
  vue2Plugin,
]

export async function onAnalyzePackageJson(options: AnalyzePackageJsonOptions): Promise<void> {
  const awaitables = plugins
    .filter(x => typeof x.on?.analyzePackageJson === 'function')
    .map(x => x.on?.analyzePackageJson && Promise.resolve(x.on.analyzePackageJson(options)))
  
  await Promise.all(awaitables)
}