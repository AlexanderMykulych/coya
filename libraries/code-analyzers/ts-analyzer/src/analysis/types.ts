import type { Node, Symbol } from 'typescript'
import type { Project, SourceFile, TypeChecker } from 'ts-morph'
import type { getProgramAndChecker } from './getProgramAndChecker'

export type ProgramContainer = ReturnType<typeof getProgramAndChecker>
export interface SourceContainer {
  sourceFile: SourceFile
  project: Project
}
export type EntityId = string
export interface BaseEntity<TSource = Entity> {
  type: CodeInfoType.Entity
  filePath: string
  id: EntityId
  entityType: EntityType
  source: TSource | '<unknown>'
}
export interface FileEntity extends BaseEntity<undefined> {
  entityType: EntityType.File
}

export interface FunctionEntity extends BaseEntity {
  entityType: EntityType.Function
  typeString: string
}

export type Entity = FileEntity | FunctionEntity | BaseEntity

export enum EntityType {
  File = 'file',
  Function = 'function',
  Variable = 'variable',
  ImportDeclaration = 'import_declaration',
}
export enum RelationType {
  Import = 'import',
  Use = 'use',
  DeclaredIn = 'declaredIn',
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
