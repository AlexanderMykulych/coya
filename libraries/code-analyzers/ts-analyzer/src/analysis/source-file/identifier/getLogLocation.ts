import { Node, SyntaxKind } from "ts-morph";
import type { EntityLogLocation } from "../../types";

export function getLogLocation(node: Node): EntityLogLocation | undefined {
  if (Node.isBodyable(node)) {
    const body = node.getBody()
    if (body) {
      return {
        logStart: body.getStart(),
        logEnd: body.getEnd(),
        code: body.getFullText(),
      }
    }
  } else {
    const body = node.getFirstChildByKind(SyntaxKind.Block)
    if (body) {
      return {
        logStart: body.getStart(),
        logEnd: body.getEnd(),
        code: body.getFullText(),
      }
    }
  }
}