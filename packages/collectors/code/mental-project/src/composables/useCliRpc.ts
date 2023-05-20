import { BirpcOptions, createBirpc } from "birpc"
import { CliConnectionStatus, CliServerApi, MentalWebApi } from "coya-analyzer-shared-types"
import type { TrackOption } from "coya-ts-analyzer"
import { useLogging } from "./useLogging"

const API_PATH = '/__coya_api__'
export const PORT = import.meta.hot ? '5173' : location.port
export const HOST = [location.hostname, PORT].filter(Boolean).join(':')
export const ENTRY_URL = `${location.protocol === 'https:' ? 'wss:' : 'ws:'}//${HOST}${API_PATH}`

const { log } = useLogging()

const ws = new globalThis.WebSocket(ENTRY_URL)

const birpcHandlers: BirpcOptions<CliServerApi> = {
  post: msg => ws.send(msg),
  on: data => ws.addEventListener('message', data),
  serialize: v => JSON.stringify(v),
  deserialize: v => JSON.parse(v.data),
  timeout: 20 * 60 * 60 * 1000,
}
const trackOptions = ref<TrackOption[]>([])
const rpc = createBirpc<CliServerApi, MentalWebApi>(
  {
    ping(msg: string) {
      return `pong from mental web (${msg})`
    },
    log: (line) => log(line),
    onTrack: (items) => trackOptions.value.push(...items),
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
    workingDir: useAsyncState(async () => {
      return await rpc.workingDir()
    }, ''),
    trackOptions,
    clearTrackOptions: () => trackOptions.value = [],
  }
}