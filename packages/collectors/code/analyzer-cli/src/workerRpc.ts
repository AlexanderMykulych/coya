import { createBirpc } from "birpc"
import type { Tracker, TrackOption } from "coya-ts-analyzer"
import type { Logger } from "pino"
import type { MessagePort } from 'worker_threads'

export type MainRpc = {
  track(options: TrackOption[]): void
}

export type WorkerRpc = {
  test(): void
}
export type CreateWorkerRpcOptions = {
  log: Logger
  onTrack: Tracker
}

export function createWorkerRpc({ log: parentLog, onTrack }: CreateWorkerRpcOptions) {
  const channel = new MessageChannel()

  const port = channel.port2 as unknown as MessagePort

  const log = parentLog.child({
    name: 'worker',
  })

  const rpc = createBirpc<WorkerRpc, MainRpc>(
    {
      track(options: TrackOption[]) {
        options.map(x => log.info({data: x}, `${x.type}. ${x.details?.msg ?? ''}`))
        onTrack?.(options)
      },
    },
    {
      post(v) { port.postMessage(v) },
      on(fn) { port.addListener('message', fn) },
      timeout: 20 * 60 * 60 * 1000,
    },
  )

  return {
    port: channel.port1,
    rpc,
  }
}

export function createMainRpc({port}: {port: MessagePort}) {
  const rpc = createBirpc<MainRpc, WorkerRpc>(
    {
      test() {
        console.log('message from main thread');
      }
    },
    {
      post(v) { port.postMessage(v) },
      on(fn) { port.addListener('message', fn) },
      timeout: 20 * 60 * 60 * 1000,
    },
  )

  return {
    rpc,
  }
}
