import { CodeInfoType, Entity, Relationship, RelationType } from "../../types";

export function getRelationBeetwenNodes(from: Entity, to: Entity, type: RelationType): Relationship {
  return {
    type: CodeInfoType.Relationship,
    from: from.id,
    to: to.id,
    id: `${from.id}->${to.id}`,
    relationType: type,
  }
}