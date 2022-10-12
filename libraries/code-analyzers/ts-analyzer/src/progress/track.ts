import { FuncParameters, Tracker, TrackFnOption, TrackOption, TrackStage } from "./trackTypes"

const trackers: Tracker[] = [
  trackConsole,
]

function trackConsole({ name, stage }: TrackOption) {
  console.log(`${name} - ${stage}`)
}

function track(options: TrackOption) {
  trackers.forEach(tracker => tracker(options))
}

let level = 0
export function trackFn<TFunc extends Function>(fn: TFunc, { name, type, objectExtractor }: TrackFnOption<TFunc>) {
  return function (...args: FuncParameters<TFunc>) {
    try {
      // @ts-ignore
      const self: any = this
      const details = !!objectExtractor ? objectExtractor.apply(null, args) : null
      track({
        name,
        stage: TrackStage.Start,
        type,
        level: level,
        details,
      })

      level++

      const result = fn.apply(self, args)

      level--

      track({
        name,
        stage: TrackStage.Finish,
        type,
        level,
      })
      return result
    } catch(e) {
      track({
        name,
        stage: TrackStage.Error,
        type,
        level,
      })

      throw e
    }
  }
}

export function trackFnAsync<TFunc extends Function>(fn: TFunc, { name }: TrackFnOption<TFunc>) {
  return async function (...args: any[]) {
    try {
      // @ts-ignore
      const self: any = this
      track({
        name,
        type: 'start',
      })
      const result = await fn.apply(self, args)

      track({
        name,
        type: 'finish',
      })
      return result
    } catch(e) {
      track({
        name,
        type: 'error',
      })

      throw e
    }
  }
}

export function addTracker(tracker: Tracker): void {
  trackers.push(tracker)
}