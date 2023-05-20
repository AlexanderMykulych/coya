import { expect, test } from "vitest";
import { useNeo4j } from "../../src/neo4j/useNeo4j";


test('neo4j is ready to work', async () => {
  const db = useNeo4j()

  await db.init()

  expect(await db.verifyConnection()).toMatchSnapshot()
}, 200)