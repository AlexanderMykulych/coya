import { VariableDeclaration } from "ts-morph";
import { EntityType, BaseEntity, CodeInfoType } from "../../types";
import { getNodeInfo } from "./getNodeId";
import { getParentId } from "./getParentId";

export function getVariableDeclarationId(v: VariableDeclaration): BaseEntity {
  const sourceFile = v.getSourceFile()
  return {
    id: `${getParentId(v)}/${v.getName()}`,
    entityType: EntityType.Variable,
    filePath: sourceFile.getFilePath(),
    type: CodeInfoType.Entity,
    source: sourceFile
      ? getNodeInfo(sourceFile)
      : '<unknown>'
  }
}