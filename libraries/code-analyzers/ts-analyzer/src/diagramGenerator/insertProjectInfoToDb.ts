import { analyze } from "../analysis/analyze";
import { useNeo4j } from "../neo4j/useNeo4j";


export async function insertProjectInfoToDb(path: string) {
  const codeInfos = await analyze(path);

  const db = useNeo4j();
  await db.init();
  await db.insertCodeInfos(codeInfos);

  return {
    db,
    codeInfos,
  }
}
