import type { TypeChecker, SourceFile } from 'typescript'
import type { getProgramAndChecker } from './getProgramAndChecker'

export type ProgramContainer = ReturnType<typeof getProgramAndChecker>
export interface SourceContainer {
  sourceFile: SourceFile
  checker: TypeChecker
}

interface BaseEntity {
  type: CodeInfoType.Entity
  name: string
  filePath: string
}
export interface FileEntity extends BaseEntity {
  entityType: EntityType.File
}

export interface FunctionEntity extends BaseEntity {
  entityType: EntityType.Function
  typeString: string
}

export type Entity = FileEntity | FunctionEntity;

export enum EntityType {
  File = 'file',
  Function = 'function'
}

export interface Relationship {
  type: CodeInfoType.Relationship
  from: Entity
  to: Entity
}

export enum CodeInfoType {
  Entity = 'entity',
  Relationship = 'relationship',
}

export type CodeInfo = Relationship | Entity