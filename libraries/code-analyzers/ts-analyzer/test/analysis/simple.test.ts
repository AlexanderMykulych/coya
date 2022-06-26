import { describe, expect, it } from 'vitest'
import { getProgramAndChecker } from '../../src/analysis/getProgramAndChecker'
import { analyzeSourceFile } from '../../src/analysis/analyzeSourceFile'
import { CodeInfoType, Relationship } from '../../src/analysis/types'

describe('simple projects', () => {
  const simpleProjectPath = `${__dirname}/cases/01_simple`
  it('should return program with non empty source files', () => {
    const { program, checker, config } = getProgramAndChecker(simpleProjectPath)

    const rootFile = program.getRootFileNames().find(x => x.endsWith('/main.ts'))!
    const sourceFile = program.getSourceFile(rootFile)


    expect(program).not.empty
    expect(checker).not.empty
    expect(config).not.empty
    expect(sourceFile).not.empty
  })

  it('should analyze add function and get relationsip', () => {
    const { program, checker } = getProgramAndChecker(simpleProjectPath)

    const rootFile = program.getRootFileNames().find(x => x.endsWith('/main.ts'))!
    const sourceFile = program.getSourceFile(rootFile)!

    const result = analyzeSourceFile({
      sourceFile,
      checker,
    })

    expect(result).not.empty

    const relationship = result.find((x): x is Relationship => x.type === CodeInfoType.Relationship)!

    expect(relationship.from.name).eq('result')
    expect(relationship.to.name).eq('add')
  })
})