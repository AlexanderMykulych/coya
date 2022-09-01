import type { Driver } from "neo4j-driver";
import { CodeInfo, CodeInfoType, Entity, Relationship } from "../analysis/types";
import { groupBy } from 'coya-util'
import { progress } from "../progress/progress";

export function getInsertCodeInfosFn(driver: Driver, database: string) {

  async function insertCodeInfos(codeInfos: CodeInfo[]) {
    const session = driver.session({ database })

    await session.writeTransaction(tx => {
      Object.entries(
        groupBy(
          codeInfos
            .filter((x): x is Entity => x.type === CodeInfoType.Entity),
          (item) => item.entityType,
        )
      ).map(([type, entities]) =>
        tx.run(`CALL apoc.create.nodes(["${type}"], $entities)`, { entities })
      )


    })
    await session.writeTransaction(tx => {
      codeInfos
        .filter((x): x is Relationship => x.type === CodeInfoType.Relationship)
        .map(r => ({
          query: `
            MATCH (e1 { id: $from})
            MATCH (e2 { id: $to})
            CALL apoc.create.relationship(e1, "Relation", $relation, e2)
            YIELD rel
            RETURN rel
            `,
          params: {
            relation: r,
            from: r.from,
            to: r.to,
          },
        }))
        .map(x => tx.run(x.query, x.params))
    })
    await session.close()
  }

  return progress('neo4j. insert', insertCodeInfos)
}