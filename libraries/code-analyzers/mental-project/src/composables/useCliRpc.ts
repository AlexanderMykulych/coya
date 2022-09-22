import { BirpcOptions, createBirpc } from "birpc"
import { CliConnectionStatus, CliServerApi, MentalWebApi } from "coya-analyzer-shared-types"

const API_PATH = '/__coya_api__'
export const PORT = import.meta.hot ? '5173' : location.port
export const HOST = [location.hostname, PORT].filter(Boolean).join(':')
export const ENTRY_URL = `${location.protocol === 'https:' ? 'wss:' : 'ws:'}//${HOST}${API_PATH}`

const ws = new globalThis.WebSocket(ENTRY_URL)

const birpcHandlers: BirpcOptions<CliServerApi> = {
  post: msg => ws.send(msg),
  on: data => ws.addEventListener('message', data),
  serialize: v => JSON.stringify(v),
  deserialize: v => JSON.parse(v.data),
}

const rpc = createBirpc<CliServerApi, MentalWebApi>(
  {
    ping(msg: string) {
      return `pong from mental web (${msg})`
    },
  },
  birpcHandlers,
)

export function useCliRpc() {
  return {
    rpc,
    status: useAsyncState(async () => {
      try {
        await rpc.ping('message from webapp')
        return CliConnectionStatus.Connected
      } catch (e) {
        return CliConnectionStatus.Failed
      }
    }, CliConnectionStatus.Connecting),
  }
}