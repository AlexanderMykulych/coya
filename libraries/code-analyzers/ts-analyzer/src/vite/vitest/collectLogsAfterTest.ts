import type { CodeInfo } from "../../analysis/types"
import type { LogItem } from "../shim"

export function collectLogsAfterTest() {
  if (!globalThis.__getLogs) {
    return
  }

  const logs = globalThis.__getLogs()

  
}


export function logsToCodeInfo(logs: LogItem[]): CodeInfo[] {
  logs
    .flatMap((item, index, items) => {

    })
}