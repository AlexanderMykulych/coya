import type { SourceFile } from 'ts-morph'
import { progress } from '../../progress/progress'
import { CodeInfo, CodeInfoType, Entity, EntityType, Relationship, RelationType } from '../types'
import { getNodeInfo } from './identifier/getNodeId'
import { nodeAnalyzer } from './nodeAnalyzer'
import { importAnalizer } from './importAnalizer'
import type { AnalyzeSourceOptions } from './types'



function _analyzeSourceFile(sourceFile: SourceFile, options?: AnalyzeSourceOptions): CodeInfo[] {
  const analizers = [
    importAnalizer,
    // functionAnalizer,
    nodeAnalyzer,
  ]

  const codeInfos = [
    ...analizers
      .flatMap(analizer =>
        analizer(
          sourceFile,
          {
            context: options?.context,
          },
        )
      ),
    ...getNodeInfo(sourceFile),
  ]

  // const sourceCodeInfos = codeInfos
  //   .filter((x): x is Entity => x.type === CodeInfoType.Entity && !!x.source && typeof x.source !== 'string')
  //   .map<[Entity, Entity[]]>((x) => [x, x.source as Entity[]])
  //   .flatMap<CodeInfo | undefined>(([node, sources]) => [
  //     ...sources,
  //     ...sources
  //       .map<Relationship>(source =>
  //       ({
  //         type: CodeInfoType.Relationship,
  //         relationType: RelationType.Parent,
  //         from: source.id,
  //         to: node.id,
  //         id: `${source.id}->${node.id}`,
  //       }))
  //   ])
  //   .filter((x): x is CodeInfo => !!x)


  // const result = [
  //   ...codeInfos,
  //   ...sourceCodeInfos,
  // ]

  // result.forEach(x => Reflect.deleteProperty(x, 'source'))

  return codeInfos
}

export const analyzeSourceFile = progress('analyzeSourceFile', _analyzeSourceFile)
