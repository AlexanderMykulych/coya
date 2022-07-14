import { SourceFile, SyntaxKind } from "ts-morph";
import { CodeInfo, CodeInfoType, EntityType } from "../types";
import { getArrowFunctionId } from "./identifier/getArrowFunctionId";
import { getFunctionDeclarationId } from "./identifier/getFunctionDeclarationId";
import { getMethodDeclarationId } from "./identifier/getMethodDeclarationId";

export function functionAnalizer(sourceFile: SourceFile): CodeInfo[] {
  return [
    ...functionDeclarationAnalyzer(sourceFile),
    ...arrowDeclarationAnalyzer(sourceFile),
    ...methodDeclarationAnalyzer(sourceFile),
  ]
}

function functionDeclarationAnalyzer(sourceFile: SourceFile): CodeInfo[] {
  return sourceFile.getDescendantsOfKind(SyntaxKind.FunctionDeclaration)
    .flatMap<CodeInfo>(x => ({
      type: CodeInfoType.Entity,
      entityType: EntityType.Function,
      id: getFunctionDeclarationId(x),
      filePath: x.getSourceFile().getFilePath(),
    }))
}
function arrowDeclarationAnalyzer(sourceFile: SourceFile): CodeInfo[] {
  return sourceFile.getDescendantsOfKind(SyntaxKind.ArrowFunction)
    .flatMap<CodeInfo>(x => ({
      type: CodeInfoType.Entity,
      entityType: EntityType.Function,
      id: getArrowFunctionId(x),
      filePath: x.getSourceFile().getFilePath(),
    }))
}

function methodDeclarationAnalyzer(sourceFile: SourceFile): CodeInfo[] {
  return sourceFile.getDescendantsOfKind(SyntaxKind.MethodDeclaration)
    .flatMap<CodeInfo>(x => ({
      type: CodeInfoType.Entity,
      entityType: EntityType.Function,
      id: getMethodDeclarationId(x),
      filePath: x.getSourceFile().getFilePath(),
    }))
}
