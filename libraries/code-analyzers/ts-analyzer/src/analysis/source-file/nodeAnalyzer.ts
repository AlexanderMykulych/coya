import { Node, SyntaxKind } from "ts-morph";
import { CodeInfo, CodeInfoType, EntityType } from "../types";
import { getNodeInfo } from "./identifier/getNodeId";
import type { AnalyzerOptions } from "./types";

const importantNodeKinds = [
  SyntaxKind.FunctionDeclaration,
  SyntaxKind.VariableDeclaration,
  SyntaxKind.ClassDeclaration,
  SyntaxKind.MethodDeclaration,
  SyntaxKind.ArrowFunction,
]

export function nodeAnalyzer(node: Node, options?: AnalyzerOptions): CodeInfo[] {

  const identifier = node.getDescendants()//.filter(x => importantNodeKinds.some(k => x.isKind(k)))
  
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