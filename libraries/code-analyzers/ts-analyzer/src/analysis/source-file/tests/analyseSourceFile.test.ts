import { Project } from "ts-morph";
import { expect, test } from "vitest";
import { objectExpect } from "../../../../test/analysis/utils/objectExpect";
import { BaseEntity, CodeInfo, CodeInfoType, Entity, EntityType, Relationship, RelationType } from "../../types";
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
export function fn1(a: number) { return a + 1 }
`
)

test('should get all imports', () => {

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

test('should get entities', () => {

  const entities = analyzeSourceFile(sourceFile)

  expect(entities).toEqual(expect.arrayContaining<CodeInfo>([
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

test('should find function -> function relation', () => {

  const project = new Project({
    useInMemoryFileSystem: true,
  })
  const sourceFile = project.createSourceFile(
    'main.ts',
    `
import { fn1 } from './dep1'
export function mainFn() {
  return fn1(1)
}
const mainFn2 = () => fn1(1)
const obj = {
  mainFn3() {
    return fn1(1)
  },
  chl1: {
    chl2: {
      mainFn4: () => fn1(1),
    }
  }
}
function mainFn5() {
  const mainFn6 = () => fn1()
  return mainFn6
}
`)
  project.createSourceFile(
    'dep1.ts',
  `
export function fn1(a: number) { return a + 1 }
`)

  const entities = analyzeSourceFile(sourceFile)

  expect(entities).toEqual(
    expect.arrayContaining(
      [
        objectExpect<Relationship>({
          type: CodeInfoType.Relationship,
          from: '/main.ts/mainFn',
          to: '/dep1.ts/fn1',
        }),
        objectExpect<Relationship>({
          type: CodeInfoType.Relationship,
          from: '/main.ts/mainFn2',
          to: '/dep1.ts/fn1',
        }),
        objectExpect<Relationship>({
          type: CodeInfoType.Relationship,
          from: '/main.ts/obj/mainFn3',
          to: '/dep1.ts/fn1',
        }),
        objectExpect<Relationship>({
          type: CodeInfoType.Relationship,
          from: '/main.ts/obj/chl1/chl2/mainFn4',
          to: '/dep1.ts/fn1',
        }),
        objectExpect<Relationship>({
          type: CodeInfoType.Relationship,
          from: '/main.ts/mainFn5/mainFn6',
          to: '/dep1.ts/fn1',
        }),
        objectExpect<Relationship>({
          type: CodeInfoType.Relationship,
          from: '/main.ts/mainFn5',
          to: '/dep1.ts/fn1',
        }),
      ]
    )
  )
})
test('should find one function -> function relation', () => {

  const project = new Project({
    useInMemoryFileSystem: true,
  })
  const sourceFile = project.createSourceFile(
    'main.ts',
    `
import { fn1 } from './dep1'
export function mainFn() {
  return fn1(1)
}
`)
  project.createSourceFile(
    'dep1.ts',
    `
export function fn1(a: number) { return a + 1 }
`)

  const entities = analyzeSourceFile(sourceFile)

  expect(entities).toEqual(
    expect.arrayContaining(
      [
        objectExpect<Relationship>({
          type: CodeInfoType.Relationship,
          from: '/main.ts/mainFn',
          to: '/dep1.ts/fn1',
        }),
      ]
    )
  )
})

test('should find function to inObject function relation', () => {

  const project = new Project({
    useInMemoryFileSystem: true,
  })
  const sourceFile = project.createSourceFile(
    'main.ts',
    `
import { getService } from "./service"

export function fn1(a: number) {
  const service = getService()
  return service.prop1.method1(a, 1)
}

`)
  project.createSourceFile(
    'service.ts',
    `
export function getService() {
  return {
    prop1: {
      method1(a: number, b: number) {
        return (a + b) / 2
      },
    },
  }
}
`)

  const entities = analyzeSourceFile(sourceFile)

  expect(entities).toEqual(
    expect.arrayContaining(
      [
        objectExpect<BaseEntity>({
          id: '/service.ts/getService/prop1/method1',
        }),
        objectExpect<Relationship>({
          type: CodeInfoType.Relationship,
          from: '/main.ts/fn1',
          to: '/service.ts/getService/prop1/method1',
        }),
        objectExpect<Relationship>({
          type: CodeInfoType.Relationship,
          relationType: RelationType.Parent,
          from: '/service.ts/getService',
          to: '/service.ts/getService/prop1/method1',
        }),
        objectExpect<Relationship>({
          type: CodeInfoType.Relationship,
          relationType: RelationType.Parent,
          from: '/service.ts',
          to: '/service.ts/getService/prop1/method1',
        }),
        objectExpect<Relationship>({
          type: CodeInfoType.Relationship,
          relationType: RelationType.Parent,
          from: '/service.ts',
          to: '/service.ts/getService',
        }),
      ]
    )
  )
})
