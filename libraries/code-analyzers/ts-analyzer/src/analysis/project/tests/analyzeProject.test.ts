import path from "path";
import { expect, test } from "vitest";
import { analyzeProject } from "../analyzeProject";

test('should analyze simple ts project', async () => {
  const result = await analyzeProject(path.resolve(__dirname, './cases/project4'))

  expect(result).toMatchSnapshot()
})

test('should analyze vue-ts project', async () => {
  const result = await analyzeProject(path.resolve(__dirname, './cases/project5'))

  expect(result).toMatchSnapshot()

  const expObj = result
    .flatMap(x => Object.entries(x) as [string, string][])
    .filter(([_, val]) => val.indexOf('[object Object]') > -1)
  expect(expObj,
    `shouldn't contain [object Object]. ${JSON.stringify(expObj)}`
  ).empty

  expect(result).toEqual(expect.arrayContaining([
    expect.objectContaining({
      "id": "/cmp.vue.ts",
      "type": "entity",
    }),
    expect.objectContaining({
      "id": "/util.ts/fn1",
      "type": "entity",
    }),
  ]))
})
