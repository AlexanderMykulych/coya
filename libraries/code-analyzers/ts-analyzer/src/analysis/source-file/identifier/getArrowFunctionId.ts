import type { ArrowFunction } from "ts-morph"
import { EntityType, FunctionEntity, CodeInfoType } from "../../types";
import { getLocation } from "./getLocation";
import { getParentId, getParentsInfo } from "./getParentId";

export function getArrowFunctionId(arrowFn: ArrowFunction): FunctionEntity {
  const sourceFile = arrowFn.getSourceFile()
  return {
    id: getParentId(arrowFn),
    entityType: EntityType.Function,
    typeString: arrowFn.getType().getText(),
    type: CodeInfoType.Entity,
    filePath: sourceFile.getFilePath(),
    source: sourceFile
      ? getParentsInfo(sourceFile)
      : [],
    ...getLocation(arrowFn),
  }
}