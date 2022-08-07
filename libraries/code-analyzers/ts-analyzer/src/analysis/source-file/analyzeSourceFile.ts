import type { SourceFile } from 'ts-morph'
import { CodeInfo, CodeInfoType, Entity, Relationship, RelationType } from '../types'
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
    .map<[Entity, Entity[]]>((x) => [x, x.source as Entity[]])
    .flatMap<CodeInfo | undefined>(([node, sources]) => [
      ...sources,
      ...sources
        .map<Relationship>(source =>
        ({
          type: CodeInfoType.Relationship,
          relationType: RelationType.Parent,
          from: source.id,
          to: node.id,
        }))
    ])
    .filter((x): x is CodeInfo => !!x)


  const result = [
    ...codeInfos,
    ...sourceCodeInfos,
  ]

  result.forEach(x => Reflect.deleteProperty(x, 'source'))

  return result
}
