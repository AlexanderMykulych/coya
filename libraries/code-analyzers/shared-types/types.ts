export interface CliServerApi {
  ping: (msg: string) => string
  getFileById: (id: string) => Promise<string>
  runAnalyze: () => Promise<void>
}

export interface MentalWebApi {
  ping: (msg: string) => string
}

export enum CliConnectionStatus {
  Connecting = 'connecting',
  Connected = 'connected',
  Failed = 'failed',
}