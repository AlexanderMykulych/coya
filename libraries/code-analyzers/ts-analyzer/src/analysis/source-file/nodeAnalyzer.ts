import type { Node } from "ts-morph";
import { CodeInfo, CodeInfoType, EntityType } from "../types";
import { canAnalyzeNode, getNodeInfo } from "./identifier/getNodeId";
import type { AnalyzerOptions } from "./types";

export function nodeAnalyzer(node: Node, options?: AnalyzerOptions): CodeInfo[] {

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