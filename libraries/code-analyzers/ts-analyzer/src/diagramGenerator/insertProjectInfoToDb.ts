import { analyze } from "../analysis/analyze";
import type { AnalysisConfig } from "../analysis/context/analysisContextType";
import { readConfig } from "../config/readConfig";
import { useNeo4j } from "../neo4j/useNeo4j";


export async function insertProjectInfoToDb(path: string, options?: { config: AnalysisConfig }) {
  let config = await readConfig(path)

  config = {
    ...config,
    ...options?.config,
  }

  const codeInfos = await analyze(path, config);

  const db = useNeo4j();
  await db.init();
  await db.insertCodeInfos(codeInfos);

  return {
    db,
    codeInfos,
  }
}
