import neo4j from 'neo4j-driver'
import type { Driver } from 'neo4j-driver'
import { groupBy } from 'coya-util'
import { CodeInfo, CodeInfoType, Entity, Relationship } from '../analysis/types'

let driver: Driver
const database = 'neo4j'
export function useNeo4j() {

  driver ??= neo4j.driver('neo4j://localhost:7687', neo4j.auth.basic('neo4j', 'test'))

  return {
    verifyConnection() {
      return driver.verifyConnectivity()
    },
    async init() {
      const session = driver.session({ database })
      await session.writeTransaction(tx => {
        tx.run(`MATCH (n) DETACH DELETE n`)
      })

      await session.close()
    },
    async insertCodeInfos(codeInfos: CodeInfo[]) {
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
            MATCH (e1 { id: "${r.from}"})
            MATCH (e2 { id: "${r.to}"})
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
  }
}
