import { TrackOption, TrackStage, TrackType } from "./trackTypes";
import { trackers, TrackingFilter } from "./trackers";
import throttle from 'lodash.throttle'
import { isNullOrUndefined } from "coya-util";

let buffer: TrackOption[] = []

export function track(options: TrackOption) {
  buffer.push(options)
  flushBuffer()
  if (options.type === TrackType.Analyzer && options.stage === TrackStage.Finish) {
    _flushBuffer()
  }
}

const _flushBuffer = () => {
  trackers.forEach(tracker => {
    const items = filterItems(buffer, tracker.options?.filter)
    if (items?.length > 0) {
      tracker.tracker(buffer)
    }
  })
  buffer = []
}

const flushBuffer = throttle(_flushBuffer, 2000)


function filterItems(items: TrackOption[], filter?: Partial<TrackingFilter>): TrackOption[] {
  if (isNullOrUndefined(filter)) {
    return items
  }

  if (filter.type) {
    items = items.filter(x => x.type === filter.type)
  }
  if (filter.name) {
    items = items.filter(x => x.name === filter.name)
  }

  return items
}