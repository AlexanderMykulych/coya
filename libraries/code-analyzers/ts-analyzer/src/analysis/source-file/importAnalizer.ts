import { SourceFile } from "ts-morph"
import { CodeInfo, CodeInfoType, RelationType } from "../types"
import { getNodeInfo } from "./identifier/getNodeId"

export function importAnalizer(sourceFile: SourceFile): CodeInfo[] {
  return sourceFile
    .getImportDeclarations()
    .map(x => ({
      entityFrom: getNodeInfo(sourceFile),
      entityTo: getNodeInfo(x.getModuleSpecifierSourceFile() ?? x)
    }))
    .flatMap<CodeInfo>(({ entityFrom, entityTo }) =>
      [
        {
          from: entityFrom.id,
          to: entityTo.id,
          type: CodeInfoType.Relationship,
          relationType: RelationType.Import,
        },
        entityFrom,
        entityTo,
      ])
}