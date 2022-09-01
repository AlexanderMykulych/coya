import type { MethodSignature } from "ts-morph";
import { EntityType, FunctionEntity, CodeInfoType } from "../../types";
import { getLocation } from "./getLocation";
import { getParentId, getParentsInfo } from "./getParentId";

export function getMethodSignatureIndo(method: MethodSignature): FunctionEntity {
  const sourceFile = method.getSourceFile()
  return {
    id: `${getParentId(method)}/${method.getName()}`,
    entityType: EntityType.Function,
    typeString: method.getType().getText(),
    type: CodeInfoType.Entity,
    filePath: sourceFile.getFilePath(),
    source: getParentsInfo(method) ?? [],
    ...getLocation(method),
  }
}