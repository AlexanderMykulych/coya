import { generateCoyaFromGraphResult } from "./generateCoyaFromQueryResult";
import { insertProjectInfoToDb } from "./insertProjectInfoToDb";

export async function diagramGenerator(path: string) {
  const { db } = await insertProjectInfoToDb(path)

  const graph = await db.read('match p = (n1)-[*..]->() return apoc.agg.graph(p) as graph')

  if (!graph) {
    throw 'graph is empty'
  }

  const coya = generateCoyaFromGraphResult(graph)

  return {
    db,
    coya,
  }
}
