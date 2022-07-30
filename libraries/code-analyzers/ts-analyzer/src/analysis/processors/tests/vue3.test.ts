import { readFile } from "fs/promises";
import { test, expect } from "vitest";
import vue3 from "../vue3";

test('should process vue file', async () => {
  const file = await readFile(`${__dirname}/cmp.vue`)
  const result = await vue3.process({
    file: 'cmp.vue',
    text: file.toString(),
  })

  expect(result.file).toStrictEqual('cmp.vue.ts')
  expect(result.text).toMatchSnapshot()
})