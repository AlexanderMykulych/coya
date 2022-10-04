import type { SourceFile } from "ts-morph"
import { CodeInfo, RelationType } from "../types"
import { getNodeInfo } from "./identifier/getNodeId"
import { getRelationBeetwenNodes } from "./relations/getRelationBeetwenNodes"
import type { AnalyzerOptions } from "./types"

export function importAnalizer(sourceFile: SourceFile, options?: AnalyzerOptions): CodeInfo[] {
  const result = sourceFile
    .getImportDeclarations()
    .map(x => ({
      entityFrom: getNodeInfo(sourceFile, options)[0],
      entityTo: getNodeInfo(x, options)[0]
    }))
    .flatMap<CodeInfo>(({ entityFrom, entityTo }) =>
      [
        getRelationBeetwenNodes({
          from: entityFrom,
          to: entityTo,
          type: RelationType.Import,
        }),
        entityFrom,
        entityTo,
      ])

  options?.context?.addCodeInfo?.(result)

  return result
}