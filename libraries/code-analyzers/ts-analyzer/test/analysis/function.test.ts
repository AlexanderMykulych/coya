import { describe, expect, it } from 'vitest'
import { getProgramAndChecker } from '../../src/analysis/getProgramAndChecker'
import { analyzeSourceFile } from '../../src/analysis/analyzeSourceFile'
import { CodeInfoType, EntityType, FunctionEntity } from '../../src/analysis/types'

describe('Analyze functions', () => {
  const funcProjectPath = `${__dirname}/cases/02_function`
  it('should get functions', () => {
    const { program, checker } = getProgramAndChecker(funcProjectPath)

    const rootFile = program.getRootFileNames().find(x => x.endsWith('/func.ts'))!
    const sourceFile = program.getSourceFile(rootFile)!

    const codeInfos = analyzeSourceFile({
      sourceFile,
      checker,
    })

    expect(sourceFile).not.empty
    expect(codeInfos).not.empty

    const funcs = codeInfos.filter((x): x is FunctionEntity => x.type === CodeInfoType.Entity && x.entityType === EntityType.Function)

    expect(funcs).lengthOf(4)
    expect(funcs).toEqual(expect.arrayContaining([
      expect.objectContaining({ name: 'func1' }),
      expect.objectContaining({ name: 'func2' }),
      expect.objectContaining({ name: 'func1_1' }),
      expect.objectContaining({ name: 'func2_1' }),
    ]))
  })

  const funcRelationProjectPath = `${__dirname}/cases/03_function_relation`
  it('should get function with relations', () => {
    const { program, checker } = getProgramAndChecker(funcRelationProjectPath)

    const rootFile = program.getRootFileNames().find(x => x.endsWith('/main.ts'))!
    const sourceFile = program.getSourceFile(rootFile)!

    const codeInfos = analyzeSourceFile({
      sourceFile,
      checker,
    })

    expect(sourceFile).not.empty
    expect(codeInfos).not.empty

    const funcs = codeInfos.filter((x): x is FunctionEntity => x.type === CodeInfoType.Entity && x.entityType === EntityType.Function)

    expect(funcs).lengthOf(4)
    expect(funcs).toEqual(expect.arrayContaining([
      expect.objectContaining({ name: 'func1' }),
      expect.objectContaining({ name: 'func2' }),
      expect.objectContaining({ name: 'func1_1' }),
      expect.objectContaining({ name: 'func2_1' }),
    ]))
  })
})