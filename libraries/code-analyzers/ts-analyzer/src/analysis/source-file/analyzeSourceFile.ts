import type { SourceFile } from 'ts-morph'
import { CodeInfo, CodeInfoType, Entity, EntityType, Relationship, RelationType } from '../types'
import { functionAnalizer } from './functionAnalizer'
import { getNodeInfo } from './identifier/getNodeId'
import { importAnalizer } from './importAnalizer'

export function analyzeSourceFile(sourceFile: SourceFile): CodeInfo[] {
  const analizers = [
    importAnalizer,
    functionAnalizer,
  ]

  const codeInfos = [
    ...analizers.flatMap(analizer => analizer(sourceFile)),
    getNodeInfo(sourceFile),
  ]

  const sourceCodeInfos = codeInfos
    .filter((x): x is Entity => x.type === CodeInfoType.Entity && !!x.source && typeof x.source !== 'string')
    .map((x) => [x, x.source as Entity])
    .flatMap<CodeInfo | undefined>(([node, source]) => [
      source,
      {
        type: CodeInfoType.Relationship,
        from: node.id,
        to: source.id,
        relationType: RelationType.DeclaredIn,
      }
    ])
    .filter((x): x is CodeInfo => !!x)

  return [
    ...codeInfos,
    ...sourceCodeInfos,
  ]
}
