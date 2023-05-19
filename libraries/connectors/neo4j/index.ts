import type { Relation } from 'coya-connectors-shared'
import neo4j from 'neo4j-driver'

export function getNeo4j() {
  const database = neo4j.driver('neo4j+s://cfa19696.databases.neo4j.io', neo4j.auth.basic('neo4j', 'tY1HmNeSn1AkfrBvmTm1jGn2u34Y305azQAMX6lRhdk'))
  return {
    async insert<T extends Object>(label: string, items: T[]) {
      const session = database.session()

      const query = `UNWIND $items AS node CREATE (n:${label}) SET n = node`
      try {
        await session.run(query, { items })
      }
      finally {
        await session.close()
      }
    },
    async insertRelations(items: Relation[]) {
      const session = database.session()

      const query = `
      UNWIND $items AS relation
      CALL apoc.merge.node([relation.fromNode], { id: relation.from }) YIELD node as n1
      CALL apoc.merge.node([relation.toNode], { id: relation.to }) YIELD node as n2
      CALL apoc.merge.relationship(n1, relation.type, relation, {}, n2) YIELD rel
      RETURN n1, n2, rel
      `
      try {
        const chunks = chunkArray(items, 200)

        let chunkIndex = 0

        for await (const chunk of chunks) {
          await session.run(query, { items: chunk })
          console.log(`chunk ${chunkIndex++} inserted`)
        }
      }
      catch (e) {
        console.log(items[0], e)
      }
      finally {
        await session.close()
      }
    },
    async clearDb() {
      const session = database.session()

      await session.run('MATCH (n) DETACH DELETE n')
    },
    async query(query: string, params?: any) {
      const session = database.session()

      return await session.run(query, params)
    },
  }
}

function chunkArray<T>(array: T[], chunkSize: number) {
  const result = []
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize))
  }
  return result
}
