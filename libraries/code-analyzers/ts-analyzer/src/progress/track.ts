import { TrackOption, TrackType } from "./trackTypes";
import { trackers } from "./trackers";
import throttle from 'lodash.throttle'

let buffer: TrackOption[] = []

export function track(options: TrackOption) {
  if (options.type === TrackType.AnalyzeSourceFile) {
    buffer.push(options)
    flushBuffer()
  }
}

const flushBuffer = throttle(() => {
  trackers.forEach(tracker => tracker(buffer))
  buffer = []
}, 500)
