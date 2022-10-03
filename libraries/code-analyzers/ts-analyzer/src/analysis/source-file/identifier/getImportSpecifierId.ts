import type { ImportSpecifier } from "ts-morph";
import { BaseEntity, CodeInfoType, EntityType } from "../../types";
import { getLocation } from "./getLocation";
import { getParentId, getParentsInfo } from "./getParentId";

export function getImportSpecifierId(node: ImportSpecifier): BaseEntity {
  const moduleSourceFile = node.getSourceFile()
  return {
    id: `${getParentId(node)}/${node.getName()}`,
    entityType: EntityType.Variable,
    filePath: moduleSourceFile?.getFilePath() ?? '<unknown>',
    type: CodeInfoType.Entity,
    // source: moduleSourceFile
    //   ? getParentsInfo(moduleSourceFile)
    //   : [],
    ...getLocation(node),
  }
}