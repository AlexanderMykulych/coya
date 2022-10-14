import { createBirpc } from "birpc"
import type { TrackOption } from "coya-ts-analyzer"
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
}

export function createWorkerRpc({ log: parentLog }: CreateWorkerRpcOptions) {
  const channel = new MessageChannel()

  const port = channel.port2 as unknown as MessagePort

  const log = parentLog.child({
    name: 'worker',
  })

  const rpc = createBirpc<WorkerRpc, MainRpc>(
    {
      track(options: TrackOption[]) {
        options.map(x => log.info({data: x}, `${x.type}. ${x.details?.msg ?? ''}`))
      },
    },
    {
      post(v) { port.postMessage(v) },
      on(fn) { port.addListener('message', fn) },
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
    },
  )

  return {
    rpc,
  }
}
