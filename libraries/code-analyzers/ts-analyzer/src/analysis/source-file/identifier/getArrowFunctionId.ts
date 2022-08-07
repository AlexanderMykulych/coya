import { ArrowFunction } from "ts-morph";
import { EntityType, FunctionEntity, CodeInfoType } from "../../types";
import { getNodeInfo } from "./getNodeId";
import { getParentId } from "./getParentId";

export function getArrowFunctionId(arrowFn: ArrowFunction): FunctionEntity {
  const sourceFile = arrowFn.getSourceFile()
  return {
    id: getParentId(arrowFn),
    entityType: EntityType.Function,
    typeString: arrowFn.getType().getText(),
    type: CodeInfoType.Entity,
    filePath: sourceFile.getFilePath(),
    source: getNodeInfo(sourceFile) ?? '<unknown>'
  }
}