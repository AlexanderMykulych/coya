import type { Symbol, Node } from 'typescript'
import type { getProgramAndChecker } from './getProgramAndChecker'
import type { Project, SourceFile, TypeChecker } from 'ts-morph'

export type ProgramContainer = ReturnType<typeof getProgramAndChecker>
export interface SourceContainer {
  sourceFile: SourceFile
  project: Project
}
export type EntityId = string
interface BaseEntity {
  type: CodeInfoType.Entity
  filePath: string
  id: EntityId
  entityType: EntityType
}
export interface FileEntity extends BaseEntity {
  entityType: EntityType.File
}

export interface FunctionEntity extends BaseEntity {
  entityType: EntityType.Function
  typeString: string
}

export type Entity = FileEntity | FunctionEntity | BaseEntity;

export enum EntityType {
  File = 'file',
  Function = 'function',
  ImportDeclaration = 'import_declaration',
}
export enum RelationType {
  Import = 'import',
}

export interface Relationship {
  type: CodeInfoType.Relationship
  relationType: RelationType
  from: EntityId
  to: EntityId
}

export enum CodeInfoType {
  Entity = 'entity',
  Relationship = 'relationship',
}

export type CodeInfo = Relationship | Entity

export interface SourceFileAnalyzeParams {
  symbol: Symbol
  checker: TypeChecker
  sourceFile:  SourceFile
  addCodeInfo: (codeInfo: CodeInfo) => void
  canAnalyze: (sourceFile: SourceFile) => boolean
}
export interface SymbolAnalyzeParams extends SourceFileAnalyzeParams {
}

export interface NodeAnalyzeParams extends SourceFileAnalyzeParams {
  node: Node
}