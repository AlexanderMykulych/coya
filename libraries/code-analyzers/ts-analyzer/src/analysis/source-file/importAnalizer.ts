import type { SourceFile } from "ts-morph"
import { trackFn } from "../../progress/track"
import { TrackType } from "../../progress/trackTypes"
import { CodeInfo, RelationType } from "../types"
import { getNodeInfo } from "./identifier/getNodeId"
import { getRelationBeetwenNodes } from "./relations/getRelationBeetwenNodes"
import type { AnalyzerOptions } from "./types"

function _importAnalizer(sourceFile: SourceFile, options?: AnalyzerOptions): CodeInfo[] {
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

export const importAnalizer = trackFn(
  _importAnalizer,
  {
    name: 'importAnalizer',
    type: TrackType.Analyzer,
    objectExtractor: () => ({
      msg: 'import',
    }),
  },
)