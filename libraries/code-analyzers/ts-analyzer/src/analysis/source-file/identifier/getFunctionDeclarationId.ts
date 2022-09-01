import type { FunctionDeclaration } from "ts-morph";
import { CodeInfoType, EntityType, FunctionEntity } from "../../types";
import { getLocation } from "./getLocation";
import { getParentId, getParentsInfo } from "./getParentId";

export function getFunctionDeclarationId(fnDec: FunctionDeclaration): FunctionEntity {
  const sourceFile = fnDec.getSourceFile()

  return {
    id: `${getParentId(fnDec)}/${fnDec.getName()}`,
    entityType: EntityType.Function,
    filePath: sourceFile.getFilePath(),
    type: CodeInfoType.Entity,
    typeString: fnDec.getType().getText(),
    source: sourceFile
      ? getParentsInfo(sourceFile)
      : [],
    ...getLocation(fnDec),
  }
}