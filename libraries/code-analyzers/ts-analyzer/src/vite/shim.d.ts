export type StartLogItem = {
  id: string
  type: 'start'
  startTime: [number, number]
}
export type EndLogItem = {
  id: string
  type: 'end'
  // seconds
  execTime: number
}
export type LogItem =
  | StartLogItem
  | EndLogItem

export declare global {
  function __getLogs(): LogItem[]
}