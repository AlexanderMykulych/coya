import path from 'path'
import { expect, test } from 'vitest'
import { analyzeFile } from '../../src/analysis/analyzeFile'

const funcProjectPath = path.join(__dirname, '/cases/04_vue')
test.skip('should get function and vue components', async() => {
  const codeInfos = await analyzeFile({
    path: funcProjectPath,
    file: '/main.ts',
  })
  console.log(codeInfos)
  expect(codeInfos).not.empty
})

test.skip('should get vue components', async() => {
  const codeInfos = await analyzeFile({
    path: funcProjectPath,
    file: '/cmp.vue',
  })
  console.log(codeInfos)
  expect(codeInfos).not.empty
})
