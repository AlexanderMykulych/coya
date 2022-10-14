import { Node, SyntaxKind } from 'ts-morph'
import { trackFn } from '../../../progress/trackFn'
import { TrackType } from '../../../progress/trackTypes'
import { isAnalyzeIgnoredPath } from '../../plugins/ignore'
import { Entity, RelationType } from '../../types'
import { getRelationBeetwenNodes } from '../relations/getRelationBeetwenNodes'
import type { AnalyzerOptions } from '../types'
import { getArrowFunctionId } from './getArrowFunctionId'
import { getClassDeclarationInfo } from './getClassDeclarationInfo'
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

type NodeExtractor = {
  kind: SyntaxKind
  fn: (node: any) => Entity | NodeCodeInfos
}

const nodeInfoExtractors: NodeExtractor[] = [
  {
    kind: SyntaxKind.ImportSpecifier,
    fn: getImportSpecifierId,
  },
  {
    kind: SyntaxKind.FunctionDeclaration,
    fn: getFunctionDeclarationId,
  },
  {
    kind: SyntaxKind.Identifier,
    fn: getIdentifierInfo,
  },
  {
    kind: SyntaxKind.VariableDeclaration,
    fn: getVariableDeclarationId,
  },
  {
    kind: SyntaxKind.ArrowFunction,
    fn: getArrowFunctionId,
  },
  {
    kind: SyntaxKind.MethodDeclaration,
    fn: getMethodDeclarationId,
  },
  {
    kind: SyntaxKind.SourceFile,
    fn: getSourceFileId,
  },
  {
    kind: SyntaxKind.ImportDeclaration,
    fn: getImportDeclarationId,
  },
  {
    kind: SyntaxKind.PropertyAssignment,
    fn: getPropertyAssignment,
  },
  {
    kind: SyntaxKind.MethodSignature,
    fn: getMethodSignatureIndo,
  },
  {
    kind: SyntaxKind.ClassDeclaration,
    fn: getClassDeclarationInfo,
  },
]

function getNodeInfoPure(node: Node): Entity | NodeCodeInfos {
  if (!node) {
    throw '<unknow node>'
  }
  const extractor = nodeInfoExtractors.find(x => node.isKind(x.kind))
  if (extractor) {
    if (!extractor.fn) {
      throw new Error(`${node.getText()}, ${node.getKindName()} ${JSON.stringify(extractor)}`)
    }
    return extractor.fn(node)
  }

  return getIgnoredNode(node)
}

function _getNodeInfo(node: Node, options?: AnalyzerOptions): NodeCodeInfos {

  let result = getNodeInfoPure(node)

  if (!isNodeCodeInfos(result)) {
    if (node.isKind(SyntaxKind.SourceFile)) {
      result = [result]
    } else {
      const parent = getParentEntity(node)

      result = [
        result,
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

const recursiveStorage = new Map<Node, boolean>()
function _getNodeInfoRecursiveSafe(node: Node, options?: AnalyzerOptions): NodeCodeInfos | [] {
  if (recursiveStorage.has(node) || isAnalyzeIgnoredPath(node.getSourceFile().getFilePath())) {
    return []
  }

  try {
    recursiveStorage.set(node, true)
    return _getNodeInfo(node, options)
  }
  finally {
    recursiveStorage.delete(node)
  }
}

export function canAnalyzeNode(node: Node): boolean {
  return nodeInfoExtractors.some(x => node.isKind(x.kind))
}

export const getNodeInfo = trackFn(
  _getNodeInfoRecursiveSafe,
  {
    name: 'getNodeInfo',
    type: TrackType.AnalyzeSourceFileNodeAnalyze,
    defaultValue: [],
    objectExtractor: (node) => ({
      msg: node.getKindName(),
    }),
    errorExtractor: node => ({
      filePath: node.getSourceFile().getFilePath(),
      kind: node.getKindName(),
      trace: (new Error()).stack,
      code: node.getText(),
    }),
  }
)

