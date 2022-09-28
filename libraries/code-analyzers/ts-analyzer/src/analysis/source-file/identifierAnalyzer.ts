import type { Node } from "ts-morph";
import { SyntaxKind } from "ts-morph";
import type { CodeInfo } from "../types";
import { getNodeInfo } from "./identifier/getNodeId";
import type { AnalyzerOptions } from "./types";

export function identifierAnalyzer(node: Node, options?: AnalyzerOptions): CodeInfo[] {

  
  const identifier = node.getDescendantsOfKind(SyntaxKind.Identifier)
  
  console.log(node.getSourceFile().getFilePath(), identifier.length)

  const codeInfos = identifier.flatMap(x => getNodeInfo(x, options))

  return codeInfos
}