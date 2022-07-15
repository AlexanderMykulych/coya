import { SyntaxKind, Node, FunctionDeclaration, Identifier} from "ts-morph";
import { CodeInfo, CodeInfoType, EntityType, Relationship } from "../types";
import { getArrowFunctionId } from "./identifier/getArrowFunctionId";
import { getFunctionDeclarationId } from "./identifier/getFunctionDeclarationId";
import { getMethodDeclarationId } from "./identifier/getMethodDeclarationId";
import { getParentId } from "./identifier/getParentId";

export function functionAnalizer(node: Node): CodeInfo[] {

  return [
    ...functionDeclarationAnalyzer(node),
    ...arrowDeclarationAnalyzer(node),
    ...methodDeclarationAnalyzer(node),
  ]
}

function functionDeclarationAnalyzer(node: Node): CodeInfo[] {
  return node.getDescendantsOfKind(SyntaxKind.FunctionDeclaration)
    .map(x => ({ node: x, id: getFunctionDeclarationId(x)}))
    .flatMap<CodeInfo>(({ node, id }) =>
      [
        {
          type: CodeInfoType.Entity,
          entityType: EntityType.Function,
          id,
          filePath: node.getSourceFile().getFilePath(),
        },
        ...getNestedRelations(node, id),
      ])
}
function arrowDeclarationAnalyzer(node: Node): CodeInfo[] {
  return node.getDescendantsOfKind(SyntaxKind.ArrowFunction)
    .map(x => ({ node: x, id: getArrowFunctionId(x)}))
    .flatMap<CodeInfo>(({ node, id }) =>
      [
        {
          type: CodeInfoType.Entity,
          entityType: EntityType.Function,
          id,
          filePath: node.getSourceFile().getFilePath(),
        },
        ...getNestedRelations(node, id),
      ]
  )
}

function methodDeclarationAnalyzer(node: Node): CodeInfo[] {
  return node.getDescendantsOfKind(SyntaxKind.MethodDeclaration)
  .map(x => ({ node: x, id: getMethodDeclarationId(x)}))
    .flatMap<CodeInfo>(({ node, id }) =>
      [
        {
          type: CodeInfoType.Entity,
          entityType: EntityType.Function,
          id,
          filePath: node.getSourceFile().getFilePath(),
        },
        ...getNestedRelations(node, id),
      ]
  )
}

function getNestedImportedIdentifiers(node: Node): Identifier[] {
  return node.getDescendantsOfKind(SyntaxKind.Identifier)
    .filter(child => child.getSymbol()?.getDeclarations()?.[0]?.isKind(SyntaxKind.ImportSpecifier))
}

function getNestedRelations(node: Node, nodeId: string): CodeInfo[] {
  return getNestedImportedIdentifiers(node)
    .map<Relationship>(x => ({
      to: getImportedIdentifierId(x),
      from: nodeId,
      type: CodeInfoType.Relationship,
    }))
}

function getImportedIdentifierId(ident: Identifier): string {
  const importSpecifier = ident.getSymbol()!.getDeclarations()?.[0]
  if (importSpecifier.isKind(SyntaxKind.ImportSpecifier)) {
    return getParentId(ident.getImplementations()[0].getNode())
  }
  return '<imported>'
}