import { groupBy } from 'coya-util'
import { hrtime } from './process'

interface BaseEvent {
  name: string
  type: 'start' | 'end'
}

interface StartEvent extends BaseEvent {
  type: 'start'
}

interface EndEvent extends BaseEvent {
  type: 'end'
  time: number
}

type Event = StartEvent | EndEvent

let logs: Event[] = []

export const progressTrackingEnabled = process.env?.PROGRESS_TRACKING === 'true'

export function progress<T extends Function>(name: string, fn: T): T {
  if (progressTrackingEnabled) {
    return async function () {
      logs.push({
        name,
        type: 'start',
      })
      const startTime = hrtime()


      const result = await Promise.resolve(fn.apply(this, arguments))

      logs.push({
        name,
        type: 'end',
        time: parseHrtimeToSeconds(hrtime(startTime))
      })

      return result
    } as unknown as T
  }

  return fn
}

export function progressSync<T extends Function>(name: string, fn: T): T {
  if (progressTrackingEnabled) {
    return function () {
      logs.push({
        name,
        type: 'start',
      })
      const startTime = process.hrtime()


      const result = fn.apply(this, arguments)

      logs.push({
        name,
        type: 'end',
        time: parseHrtimeToSeconds(process.hrtime(startTime))
      })

      return result
    } as unknown as T
  }

  return fn
}

export function clearProgress() {
  logs = []
}

export function printProgress() {
  if (logs.length > 0) {
    let ends = groupBy(logs.filter(x => x.type === 'end'), x => x.name)

    ends = Object.entries<EndEvent[]>(ends)
      .map(([name, vals]) => ({
        name,
        type: 'end',
        timeSum: sum(vals.map(x => x.time)),
        timeAvg: avg(vals.map(x => x.time)),
        calls: vals.length,
      }))
    console.table(ends)
  }
}

function parseHrtimeToSeconds(hrtime: [number, number]) {
  var seconds = (hrtime[0] + (hrtime[1] / 1e9));
  return seconds;
}

function sum(nums: number[]) {
  return nums.reduce((prev, cur) => cur + prev, 0)
}
function avg(nums: number[]) {
  return sum(nums)/nums.length
}