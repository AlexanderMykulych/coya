import { test, expect } from 'vitest'
import { run } from '../index'

test('test', async () => {
  const result = await run({
    fileName: './testFile.ts',
    basePath: `${__dirname}`,
  })

  expect(result.default).toStrictEqual(4)
})
