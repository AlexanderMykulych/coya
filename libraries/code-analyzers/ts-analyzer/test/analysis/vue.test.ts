import path from 'path'
import { describe, expect, test } from 'vitest'
import { analyzeFile } from '../../src/analysis/analyzeFile'

describe('Analyze vue project', () => {
  const funcProjectPath = path.join(__dirname, '/cases/04_vue')
  test.only('should get components', async() => {
    const codeInfos = await analyzeFile({
      path: funcProjectPath,
      file: '/main.ts',
    })
    console.log(codeInfos)
    expect(codeInfos).not.empty
  })

  test.only('should get components', async() => {
    const codeInfos = await analyzeFile({
      path: funcProjectPath,
      file: '/cmp.vue',
    })
    console.log(codeInfos)
    expect(codeInfos).not.empty
  })
})
