import path, { resolve } from 'path'
import { test, expect, describe } from 'vitest'
import { insertProjectInfoToDb } from '../../src/diagramGenerator/insertProjectInfoToDb'

describe.each([
  // {
  //   projectPath: './cases/01_simple',
  // },
  // {
  //   projectPath: './cases/02_function',
  // },
  // {
  //   projectPath: './cases/03_function_relation',
  // },
  // {
  //   projectPath: './cases/04_vue',
  // },
  // {
  //   projectPath: '../..'
  // },
  {
    projectPath: '/Users/alexandermykulych/repo/plich/user-web-test'
  },
])('project to db: $projectPath', async ({ projectPath }) => {

  test(`should return project info graph from db: ${projectPath}`, async () => {
    const fullProjectPath = resolve(__dirname, projectPath)
    const { db } = await insertProjectInfoToDb(fullProjectPath)

    const result = await db.read('match(n1)-[r]->(n2) return n1.id, r.relationType, n2.id')

    expect(result?.records.length).greaterThan(0)

  })
})
