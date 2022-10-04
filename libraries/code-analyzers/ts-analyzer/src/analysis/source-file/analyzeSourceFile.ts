import type { SourceFile } from 'ts-morph'
import { progress } from '../../progress/progress'
import type { CodeInfo } from '../types'
import { getNodeInfo } from './identifier/getNodeId'
import { nodeAnalyzer } from './nodeAnalyzer'
import { importAnalizer } from './importAnalizer'
import type { AnalyzeSourceOptions } from './types'



function _analyzeSourceFile(sourceFile: SourceFile, options?: AnalyzeSourceOptions): CodeInfo[] {
  const analizers = [
    importAnalizer,
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

  return codeInfos
}

export const analyzeSourceFile = progress('analyzeSourceFile', _analyzeSourceFile)
