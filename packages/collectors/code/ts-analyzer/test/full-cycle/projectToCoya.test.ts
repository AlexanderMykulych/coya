import path from 'path'
import { test, expect } from 'vitest'
import { generateCoyaDiagram } from '../../src/diagramGenerator/generateCoyaDiagram'

test.each([
  {
    projectPath: '/cases/01_simple',
  },
  {
    projectPath: '/cases/02_function',
  },
  {
    projectPath: '/cases/03_function_relation',
  },
  {
    projectPath: '/cases/04_vue',
  },
  // {
  //   projectPath: '../../'
  // },
  // {
  //   projectPath: '../../../../../../../repo/plich/user-web'
  // },
])('should return project coya diagram: $projectPath', async ({ projectPath }) => {
  const fullProjectPath = path.join(__dirname, projectPath)

  const { coya } = await generateCoyaDiagram(fullProjectPath)

  expect(Object.keys(coya.blocks).length).toBeGreaterThan(0)
})
