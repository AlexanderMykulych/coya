import { track } from "./track"
import { FuncParameters, FuncReturnType, TrackFnOption, TrackStage } from "./trackTypes"

let level = 0
let warnLevel = 10

export function trackFn<TFunc extends Function>(
  fn: TFunc,
  { name, type, objectExtractor, errorExtractor, disableRethrow, defaultValue }: TrackFnOption<TFunc>
) {
  return function (...args: FuncParameters<TFunc>): FuncReturnType<TFunc> {
    // @ts-ignore
    const self: any = this
    const details = objectExtractor?.apply(null, args) ?? undefined
    const errorDetails = level >= warnLevel ? errorExtractor?.apply(null, args) ?? undefined : undefined
    try {
      track({
        name,
        stage: !errorDetails ? TrackStage.Start : TrackStage.Error,
        type,
        level,
        details,
        errorDetails,
      })

      level++

      const result = fn.apply(self, args)

      level--

      track({
        name,
        stage: TrackStage.Finish,
        type,
        level,
        details,
        errorDetails,
      })
      return result
    } catch(error) {
      const errorDetails = errorExtractor?.apply(null, args) ?? undefined
      track({
        name,
        stage: TrackStage.Error,
        type,
        level,
        details,
        errorDetails: {
          error: JSON.stringify(error),
          ...errorDetails,
        },
      })

      if (disableRethrow && defaultValue) {
        return defaultValue
      }
      throw error
    }
  }
}

export function trackFnAsync<TFunc extends Function>(
  fn: TFunc,
  { name, type, objectExtractor, errorExtractor, disableRethrow, defaultValue }: TrackFnOption<TFunc>
) {
  return async function (...args: FuncParameters<TFunc>): Promise<FuncReturnType<TFunc>> {
    try {
      // @ts-ignore
      const self: any = this
      const details = objectExtractor?.apply(null, args) ?? undefined
      const errorDetails = level >= warnLevel ? errorExtractor?.apply(null, args) ?? undefined : undefined
      track({
        name,
        stage: !errorDetails ? TrackStage.Start : TrackStage.Error,
        type,
        level: level,
        details,
        errorDetails,
      })

      level++

      const result = await fn.apply(self, args)

      level--

      track({
        name,
        stage: TrackStage.Finish,
        type,
        level,
      })
      return result
    } catch(error) {
      const errorDetails = errorExtractor?.apply(null, args) ?? undefined

      level--

      track({
        name,
        stage: TrackStage.Error,
        type,
        level,
        errorDetails: {
          error: JSON.stringify(error),
          ...errorDetails,
        },
      })

      if (disableRethrow && defaultValue) {
        return defaultValue
      }

      throw error
    }
  }
}
