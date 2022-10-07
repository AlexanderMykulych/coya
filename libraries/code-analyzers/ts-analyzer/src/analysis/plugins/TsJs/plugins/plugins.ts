import { isNotNullOrUndefined } from "coya-util";
import { SourceMapConsumer } from "source-map-js";
import type { AnalysisContextStore } from "../../../context/analysisContext";
import { CodeInfo, isEntityWithFilePath, isLocatedEntity } from "../../../types";
import type { ContextStore } from "../types";
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

export function updateSourceMapLocation(codeInfo: CodeInfo, store: AnalysisContextStore<Partial<ContextStore>>) {
  if (isEntityWithFilePath(codeInfo) && isLocatedEntity(codeInfo)) {
    const files = store.get('files', [])
    const file = files.find(x => x.originFile === codeInfo.filePath)

    if (file && file.sourceMap) {
     const consumer = new SourceMapConsumer(file.sourceMap)

      if (isNotNullOrUndefined(codeInfo?.lineStart) && isNotNullOrUndefined(codeInfo?.lineEnd)) {
        const start = consumer.originalPositionFor({
          line: codeInfo.lineStart,
          column: codeInfo.columnStart,
        })
        const end = consumer.originalPositionFor({
          line: codeInfo.lineEnd,
          column: codeInfo.columnEnd,
        })

        codeInfo.lineStart = start.line
        codeInfo.columnStart = start.column

        codeInfo.lineEnd = end.line
        codeInfo.columnEnd = end.column

        return { start, end }
      }
      // console.log(`source-map: ${res}`)
    }
  }
}