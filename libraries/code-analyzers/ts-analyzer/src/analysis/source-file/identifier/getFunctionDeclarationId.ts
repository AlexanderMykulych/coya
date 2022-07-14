import { FunctionDeclaration } from "ts-morph";
import { getParentId } from "./getParentId";

export function getFunctionDeclarationId(fnDec: FunctionDeclaration): string {
  return `${getParentId(fnDec)}/${fnDec.getName()}`
}