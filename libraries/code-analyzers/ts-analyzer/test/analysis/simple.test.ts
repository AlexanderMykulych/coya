import path from 'path'
import { describe, expect, it, test } from 'vitest'
import { getProgramAndChecker } from '../../src/analysis/getProgramAndChecker'
import type { Relationship } from '../../src/analysis/types'
import { CodeInfoType } from '../../src/analysis/types'
import { analyze } from '../../src/analysis/analyze'

describe.skip('simple projects', () => {
  const simpleProjectPath = path.join(__dirname, '/cases/01_simple')
  it('should do base analysis', () => {
    const { program, checker, config } = getProgramAndChecker(simpleProjectPath)

    const rootFile = program.getRootFileNames().find(x => x.endsWith('/main.ts'))!
    const sourceFile = program.getSourceFile(rootFile)

    expect(program).not.empty
    expect(checker).not.empty
    expect(config).not.empty
    expect(sourceFile).not.empty
  })

  test('should get relationsip', async() => {
    const result = await analyze({
      path: simpleProjectPath,
      file: '/main.ts',
    })

    expect(result).not.empty

    const relationship = result.find((x): x is Relationship => x.type === CodeInfoType.Relationship)!

    expect(relationship.from.name).eq('result')
    expect(relationship.to.name).eq('add')
  })
})
