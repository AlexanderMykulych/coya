import type { Node, Symbol } from 'typescript'
import type { Project, SourceFile, TypeChecker } from 'ts-morph'
import type { getProgramAndChecker } from './getProgramAndChecker'
import { isNotNullOrUndefined } from 'coya-util'

export type ProgramContainer = ReturnType<typeof getProgramAndChecker>
export interface SourceContainer {
  sourceFile: SourceFile
  project: Project
}
export type EntityId = string

export interface EntityLogLocation {
  logStart: number
  logEnd: number
  code: string
}
export interface EntityLocation extends Partial<EntityLogLocation>{
  start: number
  end: number
  lineStart: number
  columnStart: number
  lineEnd: number
  columnEnd: number
  kind: string
}

export interface BaseEntity extends EntityLocation {
  type: CodeInfoType.Entity
  filePath: string
  id: EntityId
  entityType: EntityType
}
export interface NonLocationalBaseEntity {
  type: CodeInfoType.Entity
  filePath: string
  id: EntityId
  entityType: EntityType
}

export interface FileEntity extends NonLocationalBaseEntity {
  entityType: EntityType.File
}
export interface FolderEntity extends NonLocationalBaseEntity {
  entityType: EntityType.Folder
}

export interface FunctionEntity extends BaseEntity {
  entityType: EntityType.Function
  typeString: string
}

export interface IdentifierEntity extends BaseEntity {
  entityType: EntityType.Identifier
}

export interface UnknownEntity extends BaseEntity {
  code: string
  [k: `meta_${string}`]: any
}

export interface ActionEntity {
  type: CodeInfoType.Entity
  entityType: ActionEntityType.Call
  id: EntityId
  executionTime: number
}

export type Entity =
  | FileEntity
  | FolderEntity
  | FunctionEntity
  | IdentifierEntity
  | UnknownEntity
  | BaseEntity
  | ActionEntity

export type FSEntity = Extract<Entity, FileEntity | FolderEntity>

export type LocatedType<T> = T extends EntityLocation ? T : never
export type LocatedEntity = LocatedType<Entity> | LocatedType<Relationship>

export function isLocatedEntity(codeInfo: CodeInfo): codeInfo is LocatedEntity {
  const entity = codeInfo as any
  return isNotNullOrUndefined(entity.start) && isNotNullOrUndefined(entity.end)
}

export function isLocatedCodeInfo(codeInfo: CodeInfo): codeInfo is LocatedEntity {
  const entity = codeInfo as any
  return isNotNullOrUndefined(entity.start) && isNotNullOrUndefined(entity.end)
}

export function isEntityCodeInfo(codeInfo: CodeInfo): codeInfo is Entity {
  return codeInfo.type === CodeInfoType.Entity
}

export enum ActionEntityType {
  Call = 'call'
}

export enum EntityType {
  File = 'file',
  Folder = 'folder',
  Function = 'function',
  Class = 'class',
  Identifier = 'identifier',
  Variable = 'variable',
  Property = 'property',
  ImportDeclaration = 'import_declaration',
  Unknown = 'unknown',
}
export enum RelationType {
  Import = 'import',
  Use = 'use',
  Parent = 'parent',
  CallEntity = 'call_entity',

}

export interface SimpleRelationship {
  type: CodeInfoType.Relationship
  relationType: RelationType
  from: EntityId
  to: EntityId
  id: string
}

export type LocatedRelationship = SimpleRelationship & EntityLocation

export type Relationship = SimpleRelationship | LocatedRelationship

export enum CodeInfoType {
  Entity = 'entity',
  Relationship = 'relationship',
}

export type CodeInfo = Relationship | Entity

export interface SourceFileAnalyzeParams {
  symbol: Symbol
  checker: TypeChecker
  sourceFile: SourceFile
  addCodeInfo: (codeInfo: CodeInfo) => void
  canAnalyze: (sourceFile: SourceFile) => boolean
}
export interface SymbolAnalyzeParams extends SourceFileAnalyzeParams {
}

export interface NodeAnalyzeParams extends SourceFileAnalyzeParams {
  node: Node
}

export interface FileText {
  file: string
  text: string
}

export interface FileProcessor {
  isMatch(file: FileText): boolean
  process(file: FileText): Promise<FileText>
  processFilePath(filePath: string): string
}
