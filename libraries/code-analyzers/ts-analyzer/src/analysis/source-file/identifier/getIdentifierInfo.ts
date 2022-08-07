import { Identifier } from "ts-morph";
import { Entity } from "../../types";
import { getNodeInfo } from "./getNodeId";

export function getIdentifierInfo(node: Identifier): Entity {
  const implementations = node.getImplementations()
  const implementationNode = implementations?.at(-1)?.getNode()
  if (implementationNode) {
    const parent = implementationNode.getParent()
    return parent ? getNodeInfo(parent) : getNodeInfo(implementationNode)
  }
  const declarations = node.getSymbol()?.getDeclarations()
  if (declarations && declarations.length > 0) {
    return getNodeInfo(declarations[0])
  }

  throw `<unknown identifier id>: ${node.getText()}`
}