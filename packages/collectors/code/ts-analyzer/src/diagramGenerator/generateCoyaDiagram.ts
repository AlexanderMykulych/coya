import { generateCoyaFromGraphResult } from "./generateCoyaFromQueryResult";
import { insertProjectInfoToDb } from "./insertProjectInfoToDb";

export async function generateCoyaDiagram(path: string) {
  const { db } = await insertProjectInfoToDb(path)

  const graph = await db.read(`
  match p = (n1)-[*..{relationType: "parent"}]->(n2)
  where
    not n1.id contains 'node_modules/'
    and
    not n2.id contains 'node_modules/'
  return apoc.agg.graph(p) as graph
`)
  // const graph = await db.read('match p = (n1)-[*0..]->() return apoc.agg.graph(p) as graph')

  if (!graph) {
    throw 'graph is empty'
  }

  const coya = generateCoyaFromGraphResult(graph)

  return {
    db,
    coya,
  }
}
