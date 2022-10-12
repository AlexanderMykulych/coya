import type { SourceFile } from 'ts-morph'
import { progress } from '../../progress/progress'
import type { CodeInfo } from '../types'
import { getNodeInfo } from './identifier/getNodeId'
import { nodeAnalyzer } from './nodeAnalyzer'
import { importAnalizer } from './importAnalizer'
import type { AnalyzeSourceOptions } from './types'
import { trackFn } from '../../progress/track'
import { TrackType } from '../../progress/trackTypes'

function _analyzeSourceFile(sourceFile: SourceFile, options?: AnalyzeSourceOptions): CodeInfo[] {
  const analizers = [
    importAnalizer,
    nodeAnalyzer,
  ]
  
  return [
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
}

// export const analyzeSourceFile = progress('analyzeSourceFile', _analyzeSourceFile)
export const analyzeSourceFile = trackFn(
  _analyzeSourceFile,
  {
    name: 'analyzeSourceFile',
    type: TrackType.AnalyzeSourceFile,
    objectExtractor(sourceFile) {
      return {
        filePath: sourceFile.getFilePath(),
        msg: `file: ${sourceFile.getFilePath()}`,
      }
    },
  },
)
