import { isNotNullOrUndefined } from "coya-util"
import type { SourceFile } from "ts-morph"
import { trackFn } from "../../progress/trackFn"
import { TrackType } from "../../progress/trackTypes"
import { CodeInfo, Entity, RelationType } from "../types"
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
    .filter((x): x is { entityFrom: Entity, entityTo: Entity } => isNotNullOrUndefined(x.entityFrom) && isNotNullOrUndefined(x.entityTo))
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