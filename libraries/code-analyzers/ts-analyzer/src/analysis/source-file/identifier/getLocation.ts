import type { Node } from "ts-morph";
import type { EntityLocation } from "../../types";
import { getLogLocation } from "./getLogLocation";

export function getLocation(node: Node): EntityLocation {
  return {
    start: node.getStart(),
    end: node.getEnd(),
    lineStart: node.getStartLineNumber(),
    lineEnd: node.getEndLineNumber(),
    kind: node.getKindName(),
    ...getLogLocation(node),
  }
}