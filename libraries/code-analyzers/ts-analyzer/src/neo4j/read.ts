import type { Driver, QueryResult } from "neo4j-driver"
import { progress } from "../progress/progress"

export function getReadFn(driver: Driver, database: string) {
  async function read(query: string, parameters ?: any): Promise<QueryResult | null> {
    const session = driver.session({ database })

      let result: QueryResult | null = null
      await session.readTransaction(async tx => {
      result = await tx.run(query, parameters)
    })

      await session.close()

      return result
  }

  return progress('neo4j. read', read)
}