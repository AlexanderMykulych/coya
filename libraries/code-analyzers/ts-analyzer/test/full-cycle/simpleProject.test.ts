import path from 'path'
import { test, expect, describe } from 'vitest'
import { insertProjectInfoToDb } from '../../src/diagramGenerator/insertProjectInfoToDb'

describe.each([
  {
    projectPath: '/cases/01_simple',
  },
  {
    projectPath: '/cases/02_function',
  },
  {
    projectPath: '/cases/03_function_relation',
  },
  // {
  //   projectPath: '/cases/04_vue',
  // },
])('project: $projectPath', async ({ projectPath }) => {
  const fullProjectPath = path.join(__dirname, projectPath)

  const { db } = await insertProjectInfoToDb(fullProjectPath)

  test(`should return project info entities from db: ${projectPath}`, async () => {

    const result = await db.read('match(e) return e.id')

    expect(result?.records.length).greaterThan(0)

  })

  test(`should return project info graph from db: ${projectPath}`, async () => {

    const result = await db.read('match(n1)-[r]->(n2) return n1.id, r.relationType, n2.id')

    expect(result?.records.length).greaterThan(0)

  })
})
