import { SourceFile } from 'ts-morph'
import { CodeInfo, CodeInfoType, EntityType } from '../types'
import { functionAnalizer } from './functionAnalizer'
import { getSourceFileId } from './identifier/getSourceFileId'
import { importAnalizer } from './importAnalizer'

export function analyzeSourceFile(sourceFile: SourceFile): CodeInfo[] {

  const analizers = [
    importAnalizer,
    functionAnalizer,
  ]

  return [
    ...analizers.flatMap(analizer => analizer(sourceFile)),
    {
      type: CodeInfoType.Entity,
      id: getSourceFileId(sourceFile)!,
      entityType: EntityType.File,
      filePath: sourceFile.getFilePath(),
    },
  ]
}
