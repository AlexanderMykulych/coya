import { Node, SyntaxKind } from "ts-morph";
import { CodeInfo, Entity, RelationType } from "../types";
import { getNodeInfo } from "./identifier/getNodeId";
import type { NodeCodeInfos } from "./identifier/types";
import { getRelationBeetwenNodes } from "./relations/getRelationBeetwenNodes";
import type { AnalyzerOptions } from "./types";

export function consistentNodeAnalyzer(node: Node, options?: AnalyzerOptions): CodeInfo[] {

  const codeInfos = search(node, item => getNodeInfo(item))

  options?.context?.addCodeInfo?.(codeInfos)

  return codeInfos
}

const importantNodeKinds = [
  SyntaxKind.FunctionDeclaration,
  SyntaxKind.VariableDeclaration,
  SyntaxKind.ClassDeclaration,
  SyntaxKind.MethodDeclaration,
  SyntaxKind.ArrowFunction,
]
function search(rootNode: Node, nodeToEntity: (node: Node) => NodeCodeInfos): CodeInfo[] {

  const _search = (node: Node, parent?: Entity): Array<{item: Entity, parent: Entity, additional: CodeInfo[]}> => {
    const [nodeEntity, ...restCodeInfos] = nodeToEntity(node)

    const childs = node
      .getDescendants()
      .filter(x => importantNodeKinds.some(k => x.isKind(k)))
      .map(x => ({
        node: x,
        entity: nodeToEntity(x),
      }))

    const childEntities = childs.flatMap(child => _search(child.node, nodeEntity))

    if (!parent) {
      return childEntities
    }

    return [
      {
        item: nodeEntity,
        parent,
        additional: restCodeInfos,
      },
      ...childEntities,
    ]
  }

  return _search(rootNode)
    .flatMap(item => [
      item.item,
      item.parent,
      getRelationBeetwenNodes({
        from: item.parent,
        to: item.item,
        type: RelationType.Parent,
      }),
      ...item.additional,
    ])
}
