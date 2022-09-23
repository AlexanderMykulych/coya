import type { Node } from "ts-morph";
import type { EntityLocation } from "../../types";
import { getLogLocation } from "./getLogLocation";

export function getLocation(node: Node): EntityLocation {
  const sourceFile = node.getSourceFile()
  return {
    start: node.getStart(),
    end: node.getEnd(),
    lineStart: node.getStartLineNumber(),
    columnStart: node.getStartLinePos(),
    lineEnd: node.getEndLineNumber(),
    columnEnd: node.getEnd(),
    kind: node.getKindName(),
    ...getLogLocation(node),
  }
}