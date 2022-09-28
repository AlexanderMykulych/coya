import type { Node } from "ts-morph";
import { CodeInfoType, EntityType, UnknownEntity } from "../../types";
import { getLocation } from "./getLocation";
import { getParentsInfo } from "./getParentId";

let unknowId = 1
export function getIgnoredNode(node: Node): UnknownEntity {
  const sourceFile = node.getSourceFile()
  return {
    id: `<unknown> (${unknowId++})`,
    entityType: EntityType.Unknown,
    filePath: sourceFile.getFilePath(),
    type: CodeInfoType.Entity,
    code: node.getFullText(),
    meta_kind: node.getKindName(),
    source: sourceFile
      ? getParentsInfo(sourceFile)
      : [],
    ...getLocation(node),
  }
}