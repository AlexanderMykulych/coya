import { Project } from "ts-morph";
import { expect, test } from "vitest";
import { getImportedFiles } from "../getImportedFiles";

test('should get all imports', async () => {
  const project = new Project({
    useInMemoryFileSystem: true,
  })

  const sourceFile = project.createSourceFile('main.ts', `
  import def from './test'
  import def from 'lodash'
  import def from '../../test'

  export 1
  `)

  const imports = getImportedFiles(sourceFile)
  console.log(imports);
  
  expect(imports).toHaveLength(3)

})