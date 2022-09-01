import type { Node } from "ts-morph";
import { CodeInfoType, EntityType, UnknownEntity } from "../../types";
import { getLocation } from "./getLocation";
import { getParentId, getParentsInfo } from "./getParentId";

export function getIgnoredNode(node: Node): UnknownEntity {
  const sourceFile = node.getSourceFile()
  return {
    id: `<unknown>`,
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