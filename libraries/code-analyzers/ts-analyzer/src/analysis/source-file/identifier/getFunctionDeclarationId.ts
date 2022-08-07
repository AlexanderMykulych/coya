import { FunctionDeclaration } from "ts-morph";
import { CodeInfoType, EntityType, FunctionEntity } from "../../types";
import { getNodeInfo } from "./getNodeId";
import { getParentId } from "./getParentId";

export function getFunctionDeclarationId(fnDec: FunctionDeclaration): FunctionEntity {
  const sourceFile = fnDec.getSourceFile()
  return {
    id: `${getParentId(fnDec)}/${fnDec.getName()}`,
    entityType: EntityType.Function,
    filePath: sourceFile.getFilePath(),
    type: CodeInfoType.Entity,
    typeString: fnDec.getType().getText(),
    source: sourceFile
      ? getNodeInfo(sourceFile)
      : '<unknown>'
  }
}