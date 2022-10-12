export type FuncParameters<TFunc extends Function> = TFunc extends (...args: any[]) => any
  ? Parameters<TFunc>
  : unknown[]

export type TrackFnOption<TFunc extends Function> = {
  name: string
  type: TrackType
  objectExtractor?: (...args: FuncParameters<TFunc>) => Object
}

export enum TrackStage {
  Start = 'start',
  Finish = 'finish',
  Error = 'error'
}


export enum TrackType {
  Analyzer = 'Analyzer',
  AnalyzeSourceFile = 'AnalyzeSourceFile',
  AnalyzeSourceFileNodeAnalyze = "AnalyzeSourceFileNodeAnalyze"
}

export type TrackOption = {
  name: string
  stage: TrackStage
  type: TrackType
  level: number
  details?: any
}
export type Tracker = (options: TrackOption) => void