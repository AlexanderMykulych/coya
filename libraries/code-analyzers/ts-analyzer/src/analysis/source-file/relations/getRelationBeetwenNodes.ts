import { CodeInfoType, Entity, EntityLocation, Relationship, RelationType } from "../../types";

export type RelationBeetwenNodesOptions = {
  from: Entity,
  to: Entity,
  type: RelationType
  location?: EntityLocation
}

export function getRelationBeetwenNodes({ from, to, type, location }: RelationBeetwenNodesOptions): Relationship {
  return {
    type: CodeInfoType.Relationship,
    from: from.id,
    to: to.id,
    id: `${from.id}->${to.id}`,
    relationType: type,
    ...location,
  }
}