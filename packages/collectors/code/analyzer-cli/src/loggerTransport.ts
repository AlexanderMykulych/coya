import { ref } from '@vue/reactivity'
import type { BirpcReturn } from 'birpc'
import type { MentalWebApi } from 'coya-analyzer-shared-types'
import abstractTransport from 'pino-abstract-transport'

const globalRpc = ref<BirpcReturn<MentalWebApi>>()
let dest = []

export function loggerTransport() {
  return abstractTransport(function(source) {
    source.on('data', (line) => {
      if (globalRpc.value) {
        globalRpc.value.log(line)
      } else {
        dest.push(line)
      }
    })
  })
}

export function setLoggerRpc(rpc: BirpcReturn<MentalWebApi>): void {
  globalRpc.value = rpc
  if (dest.length > 0) {
    dest.forEach(x => globalRpc.value.log(x))
    dest = []
  }
}
