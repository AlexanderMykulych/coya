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
      const rows = codeInfos
        .filter((x): x is Relationship => x.type === CodeInfoType.Relationship)

      tx.run(`
          UNWIND $batch as row
          MATCH (from { id: row.from})
          MATCH (to { id: row.to})
          CALL apoc.create.relationship(from, "Relation", row, to)
          YIELD rel
          RETURN count(*)
          `,
        {
          batch: rows,
        },
      )
    })
    await session.close()
  }

  return progress('neo4j. insert', insertCodeInfos)
}