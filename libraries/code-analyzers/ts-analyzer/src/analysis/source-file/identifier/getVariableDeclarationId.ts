import { VariableDeclaration } from "ts-morph";
import { getParentId } from "./getParentId";
import { resolveId } from "./resolveId";

export function getVariableDeclarationId(v: VariableDeclaration): string {
  return resolveId(getParentId(v), v.getName())
}