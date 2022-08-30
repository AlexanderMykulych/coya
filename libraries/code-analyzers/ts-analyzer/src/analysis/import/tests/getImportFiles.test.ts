import { ModuleResolutionKind, Project } from "ts-morph";
import { expect, test } from "vitest";
import { getImportedFiles } from "../getImportedFiles";

test('get relative imported file', () => {
  const project = new Project({
    useInMemoryFileSystem: true,
    compilerOptions: { moduleResolution: ModuleResolutionKind.Classic }
  });
  const sourceFile = project.createSourceFile('main.ts', 'import def from "./utils"')

  const imports = getImportedFiles(sourceFile)

  expect(imports).toEqual(['./utils'])
})

test('get relative nested imported file', () => {
  const project = new Project({
    useInMemoryFileSystem: true,
    compilerOptions: { moduleResolution: ModuleResolutionKind.Classic }
  });
  const sourceFile = project.createSourceFile('main.ts', 'import def from "./utils/utils"')

  const imports = getImportedFiles(sourceFile)

  expect(imports).toEqual(['./utils/utils'])
})

test('get relative nested imported file when main in nested too', () => {
  const project = new Project({
    useInMemoryFileSystem: true,
    compilerOptions: { moduleResolution: ModuleResolutionKind.Classic }
  });
  const sourceFile = project.createSourceFile('main/main.ts', 'import def from "../utils/utils"')

  const imports = getImportedFiles(sourceFile)

  expect(imports).toEqual(['./utils/utils'])
})

test('get external module', () => {
  const project = new Project({
    useInMemoryFileSystem: true,
    compilerOptions: { moduleResolution: ModuleResolutionKind.Classic }
  });
  const sourceFile = project.createSourceFile('main.ts', 'import vue from "vue"')

  const imports = getImportedFiles(sourceFile)

  expect(imports).toEqual(['vue'])
})
