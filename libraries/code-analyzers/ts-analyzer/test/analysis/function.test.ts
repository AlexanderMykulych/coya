import path from 'path'
import { describe, expect, it, test } from 'vitest'
import { getProgramAndChecker } from '../../src/analysis/getProgramAndChecker'
import { analyzeSourceFile } from '../../src/analysis/analyzeSourceFile'
import type { FunctionEntity, Relationship } from '../../src/analysis/types'
import { CodeInfoType, EntityType } from '../../src/analysis/types'
import { analyzeFile } from '../../src/analysis/analyzeFile'

describe('Analyze functions', () => {
  const funcProjectPath = path.join(__dirname, '/cases/02_function')
  test('should get functions', async() => {
    const codeInfos = await analyzeFile({
      path: funcProjectPath,
      file: '/func.ts',
    })

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

  const funcRelationProjectPath = path.join(__dirname, '/cases/03_function_relation')
  test('should get function with relations', async() => {
    const codeInfos = await analyzeFile({
      path: funcRelationProjectPath,
      file: '/main.ts',
    })

    expect(codeInfos).not.empty

    const funcs = codeInfos.filter((x): x is FunctionEntity => x.type === CodeInfoType.Entity && x.entityType === EntityType.Function)

    expect(funcs).toEqual(expect.arrayContaining([
      expect.objectContaining({ name: 'func1' }),
      expect.objectContaining({ name: 'func2' }),
      expect.objectContaining({ name: 'func1_1' }),
      expect.objectContaining({ name: 'func2_1' }),
      expect.objectContaining({ name: 'func3' }),
    ]))

    const relations = codeInfos.filter((x): x is Relationship => x.type === CodeInfoType.Relationship)
    expect(relations).toEqual(expect.arrayContaining([
      expect.objectContaining({
        from: expect.objectContaining({
          name: 'func1',
        }),
        to: expect.objectContaining({
          name: 'func2',
        }),
      }),
      expect.objectContaining({
        from: expect.objectContaining({
          name: 'func3',
        }),
        to: expect.objectContaining({
          name: 'func2',
        }),
      }),
      expect.objectContaining({
        from: expect.objectContaining({
          name: 'func4',
        }),
        to: expect.objectContaining({
          name: 'func2',
        }),
      }),
      expect.objectContaining({
        from: expect.objectContaining({
          name: 'func4',
        }),
        to: expect.objectContaining({
          name: 'func3',
        }),
      }),
    ]))
  }, 10_000_000)
})
