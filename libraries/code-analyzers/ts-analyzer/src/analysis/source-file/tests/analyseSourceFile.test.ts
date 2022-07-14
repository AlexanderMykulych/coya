import { InMemoryFileSystemHost, Project } from "ts-morph";
import { expect, test } from "vitest";
import { objectExpect } from "../../../../test/analysis/utils/objectExpect";
import { CodeInfoType, Entity, EntityType, Relationship, RelationType } from "../../types";
import { analyzeSourceFile } from "../analyzeSourceFile";
import { importAnalizer } from "../importAnalizer";

const project = new Project({
  useInMemoryFileSystem: true,
})
const sourceFile = project.createSourceFile(
  'main.ts',
  `
import fn1 from './dep1'
import fn2 from './dep2'

export const a = fn1(1) + fn2(2)

export function mainFn() {
  return fn1(1)
}

function mainFn2() { return fn2(1) }

const mainFn3 = () => fn1(1)

const obj = {
  mainFn4() { return fn2(1) },
  chl: {
    mainFn5() { return fn1(1) },
  },
  mainFn6: () => fn2(1),
  chl2: {
    mainFn7: () => fn1(1),
  },
}
`
)
project.createSourceFile(
  'dep1.ts',
`
export default (a: number) => a + 1
`
)

test('analyze imports', () => {

  const codeInfos = importAnalizer(sourceFile)

  expect(codeInfos).toEqual(expect.arrayContaining<Relationship>([
    expect.objectContaining({
      from: '/main.ts',
      to: '/dep1.ts',
      type: CodeInfoType.Relationship,
      relationType: RelationType.Import
    }),
  ]))
})

test.only('analize source file entities', () => {

  const entities = analyzeSourceFile(sourceFile)

  expect(entities).toEqual(expect.arrayContaining<Entity>([
    objectExpect<Entity>({
      type: CodeInfoType.Entity,
      entityType: EntityType.File,
      id: '/dep1.ts'
    }),
    objectExpect<Entity>({
      type: CodeInfoType.Entity,
      entityType: EntityType.File,
      id: '/main.ts'
    }),
    objectExpect<Entity>({
      type: CodeInfoType.Entity,
      entityType: EntityType.Function,
      id: '/main.ts/mainFn'
    }),
    objectExpect<Entity>({
      type: CodeInfoType.Entity,
      entityType: EntityType.Function,
      id: '/main.ts/mainFn2'
    }),
    objectExpect<Entity>({
      type: CodeInfoType.Entity,
      entityType: EntityType.Function,
      id: '/main.ts/mainFn3'
    }),
    objectExpect<Entity>({
      type: CodeInfoType.Entity,
      entityType: EntityType.Function,
      id: '/main.ts/obj/mainFn4'
    }),
    objectExpect<Entity>({
      type: CodeInfoType.Entity,
      entityType: EntityType.Function,
      id: '/main.ts/obj/chl/mainFn5'
    }),
    objectExpect<Entity>({
      type: CodeInfoType.Entity,
      entityType: EntityType.Function,
      id: '/main.ts/obj/mainFn6'
    }),
    objectExpect<Entity>({
      type: CodeInfoType.Entity,
      entityType: EntityType.Function,
      id: '/main.ts/obj/chl2/mainFn7'
    }),
  ]))
})