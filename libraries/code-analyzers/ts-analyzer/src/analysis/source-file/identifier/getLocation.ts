import type { Node } from "ts-morph";
import type { EntityLocation } from "../../types";
import { getLogLocation } from "./getLogLocation";

export function getLocation(node: Node): EntityLocation {
  const sourceFile = node.getSourceFile()
  const start = sourceFile.getLineAndColumnAtPos(node.getStart())
  const end = sourceFile.getLineAndColumnAtPos(node.getEnd())
  return {
    start: node.getStart(),
    end: node.getEnd(),
    lineStart: start.line,
    columnStart: start.column,
    lineEnd: end.line,
    columnEnd: end.column,
    kind: node.getKindName(),
    ...getLogLocation(node),
  }
}