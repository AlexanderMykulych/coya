import type { SourceFile } from "ts-morph"
import { CodeInfo, CodeInfoType, RelationType } from "../types"
import { getNodeInfo } from "./identifier/getNodeId"
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
        {
          from: entityFrom.id,
          to: entityTo.id,
          type: CodeInfoType.Relationship,
          relationType: RelationType.Import,
          id: `${entityFrom.id}->${entityTo.id}`,
        },
        entityFrom,
        entityTo,
      ])

  options?.context?.addCodeInfo?.(result.filter(x => x.type === CodeInfoType.Relationship))

  return result
}