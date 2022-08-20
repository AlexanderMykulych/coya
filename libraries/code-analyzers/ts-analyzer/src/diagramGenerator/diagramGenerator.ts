import { insertProjectInfoToDb } from "./insertProjectInfoToDb";

export async function diagramGenerator(path: string) {
  await insertProjectInfoToDb(path)

}
