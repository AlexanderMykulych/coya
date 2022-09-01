import type { PropertyAssignment } from "ts-morph";
import { BaseEntity, CodeInfoType, EntityType } from "../../types";
import { getLocation } from "./getLocation";
import { getParentId, getParentsInfo } from "./getParentId";

export function getPropertyAssignment(node: PropertyAssignment): BaseEntity {
  return {
    id: `${getParentId(node)}/${node.getName()}`,
    type: CodeInfoType.Entity,
    entityType: EntityType.Property,
    filePath: node.getSourceFile().getFilePath(),
    source: getParentsInfo(node) ?? [],
    ...getLocation(node),
  }
}