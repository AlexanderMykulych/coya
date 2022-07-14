import { ImportDeclaration } from "ts-morph";

export function getImportDeclarationId(importDec?: ImportDeclaration): string | undefined {
  return importDec?.getModuleSpecifierValue()
}