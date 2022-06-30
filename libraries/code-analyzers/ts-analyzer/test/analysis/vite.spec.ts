import path from 'path'
import { expect, test } from 'vitest'
import { executeFile } from '../../src/analysis/vite/startViteServer'

test('should run ts file', async() => {
  const res = await executeFile({
    path: path.join(__dirname, '/cases/05_vite'),
    entry: './main.ts',
  })

  expect(res.executionResult.default).eq('test')
})

test('should run ts file with imports', async() => {
  const res = await executeFile({
    path: path.join(__dirname, '/cases/05_vite'),
    entry: './test.ts',
  })

  expect(res.executionResult.default).eq('test')
})
