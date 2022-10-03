import { Node, SyntaxKind } from 'ts-morph'
import { Entity, RelationType } from '../../types'
import { getRelationBeetwenNodes } from '../relations/getRelationBeetwenNodes'
import type { AnalyzerOptions } from '../types'
import { getArrowFunctionId } from './getArrowFunctionId'
import { getFunctionDeclarationId } from './getFunctionDeclarationId'
import { getIdentifierInfo } from './getIdentifierInfo'
import { getIgnoredNode } from './getIgnoredNode'
import { getImportDeclarationId } from './getImportDeclarationId'
import { getImportSpecifierId } from './getImportSpecifierId'
import { getLocation } from './getLocation'
import { getMethodDeclarationId } from './getMethodDeclarationId'
import { getMethodSignatureIndo } from './getMethodSignatureIndo'
import { getParentEntity } from './getParentId'
import { getPropertyAssignment } from './getPropertyAssignment'
import { getSourceFileId } from './getSourceFileId'
import { getVariableDeclarationId } from './getVariableDeclarationId'
import { isNodeCodeInfos, NodeCodeInfos } from './types'

function _getNodeInfo(node: Node): Entity | NodeCodeInfos {
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
  if (node.isKind(SyntaxKind.MethodSignature)) {
    return getMethodSignatureIndo(node)
  }

  return getIgnoredNode(node)
}


export function getNodeInfo(node: Node, options?: AnalyzerOptions): NodeCodeInfos {
  let result = _getNodeInfo(node)

  if (!isNodeCodeInfos(result)) {
    if (node.isKind(SyntaxKind.SourceFile)) {
      result = [result]
    } else {
      const parent = getParentEntity(node)
      
      result = [
        result,
        parent,
        getRelationBeetwenNodes({
          from: parent,
          to: result,
          type: RelationType.Parent,
          location: getLocation(node),
        }),
      ]
    }
  }

  options?.context?.addCodeInfo?.(result)

  return result
}
