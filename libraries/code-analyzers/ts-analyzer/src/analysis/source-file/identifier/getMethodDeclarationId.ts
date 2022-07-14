import { MethodDeclaration, SyntaxKind } from "ts-morph";
import { getParentId } from "./getParentId";

export function getMethodDeclarationId(method: MethodDeclaration): string {
  return `${getParentId(method)}/${method.getName()}`
}