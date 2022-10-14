import type { CodeInfo, FsTree } from 'coya-ts-analyzer'

export interface CliServerApi {
  ping: (msg: string) => string
  getFileById: (id: string) => Promise<string>
  runAnalyze: () => Promise<void>
  runTestAnalyze: (id: string) => Promise<CodeInfo[]>
  workingDir: () => string
  getFSTree: () => Promise<FsTree>
}

export interface MentalWebApi {
  ping: (msg: string) => string
  log: (line: any) => void
}

export enum CliConnectionStatus {
  Connecting = 'connecting',
  Connected = 'connected',
  Failed = 'failed',
}