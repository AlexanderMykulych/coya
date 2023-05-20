import path from "path";
import { expect, test } from "vitest";
import { getEntryPoint } from "../getEntryPoint";

test('should find entry file index.ts', async () => {
  const entryFile = await getEntryPoint(path.resolve(__dirname, 'cases/project1'))

  expect(entryFile?.file).toEqual(expect.stringContaining('index.ts'))
})

test('should find entry file index.js', async () => {
  const entryFile = await getEntryPoint(path.resolve(__dirname, 'cases/project2'))

  expect(entryFile?.file).toEqual(expect.stringContaining('index.js'))
})

test('shouldn`t find entry file', async () => {
  const entryFile = await getEntryPoint(path.resolve(__dirname, 'cases/project3'))

  expect(entryFile).toBeNull()
})
