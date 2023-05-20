import type { Node } from "ts-morph";
import { trackFn } from "../../progress/trackFn";
import { TrackType } from "../../progress/trackTypes";
import { CodeInfo, CodeInfoType, EntityType } from "../types";
import { canAnalyzeNode, getNodeInfo } from "./identifier/getNodeId";
import type { AnalyzerOptions } from "./types";

function _nodeAnalyzer(node: Node, options?: AnalyzerOptions): CodeInfo[] {

  const identifier = node.getDescendants()
    .filter(x => canAnalyzeNode(x))
  
  console.log(node.getSourceFile().getFilePath(), identifier.length)

  const codeInfos = identifier
    .flatMap(x => getNodeInfo(x, options))
    .filter(x => {
      if (x.type === CodeInfoType.Entity) {
        return x.entityType !== EntityType.Unknown
      } else {
        return x.from !== '<unknown>' && x.to !== '<unknown>'
      }
    })

  return codeInfos
}

export const nodeAnalyzer = trackFn(
  _nodeAnalyzer,
  {
    name: 'nodeAnalyzer',
    type: TrackType.AnalyzeSourceFileNodeAnalyze,
    objectExtractor: (node) => ({
      msg: node.getKindName(),
    }),
  },
)