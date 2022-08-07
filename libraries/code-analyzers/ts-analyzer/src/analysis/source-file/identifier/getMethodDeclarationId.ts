import { MethodDeclaration } from "ts-morph";
import { EntityType, FunctionEntity, CodeInfoType } from "../../types";
import { getNodeInfo } from "./getNodeId";
import { getParentId } from "./getParentId";

export function getMethodDeclarationId(method: MethodDeclaration): FunctionEntity {
  const sourceFile = method.getSourceFile()
  return {
    id: `${getParentId(method)}/${method.getName()}`,
    entityType: EntityType.Function,
    typeString: method.getType().getText(),
    type: CodeInfoType.Entity,
    filePath: sourceFile.getFilePath(),
    source: getNodeInfo(sourceFile) ?? '<unknown>'
  }
}