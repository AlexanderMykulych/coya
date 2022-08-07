import { Node, SyntaxKind } from 'ts-morph'
import type { Entity } from '../../types'
import { getArrowFunctionId } from './getArrowFunctionId'
import { getFunctionDeclarationId } from './getFunctionDeclarationId'
import { getIdentifierInfo } from './getIdentifierInfo'
import { getImportDeclarationId } from './getImportDeclarationId'
import { getImportSpecifierId } from './getImportSpecifierId'
import { getMethodDeclarationId } from './getMethodDeclarationId'
import { getPropertyAssignment } from './getPropertyAssignment'
import { getSourceFileId } from './getSourceFileId'
import { getVariableDeclarationId } from './getVariableDeclarationId'

export function getNodeInfo(node: Node): Entity {
  if (!node) {
    throw '<unknow node>'
  }
  if (node.isKind(SyntaxKind.ImportSpecifier)) {
    return getImportSpecifierId(node)
  }
  if (node.isKind(SyntaxKind.FunctionDeclaration)) {
    return getFunctionDeclarationId(node)
  }
  if (node.isKind(SyntaxKind.Identifier)) {
    return getIdentifierInfo(node)
  }
  if (node.isKind(SyntaxKind.VariableDeclaration)) {
    return getVariableDeclarationId(node)
  }
  if (node.isKind(SyntaxKind.ArrowFunction)) {
    return getArrowFunctionId(node)
  }
  if (node.isKind(SyntaxKind.MethodDeclaration)) {
    return getMethodDeclarationId(node)
  }
  if (node.isKind(SyntaxKind.SourceFile)) {
    return getSourceFileId(node)
  }
  if (node.isKind(SyntaxKind.ImportDeclaration)) {
    return getImportDeclarationId(node)
  }
  if (node.isKind(SyntaxKind.PropertyAssignment)) {
    return getPropertyAssignment(node)
  }
  throw 'unknow node kind ' + node.getKindName()
}
