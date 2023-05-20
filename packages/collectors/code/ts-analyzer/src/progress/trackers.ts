import type { Tracker, TrackOption, TrackType } from "./trackTypes";

export type TrackerItem = {
  tracker: Tracker
  options?: AddTrackerOptions
}

export const trackers: TrackerItem[] = [
  // {
  //   tracker: trackConsole,
  // },
];

export type TrackingFilter = {
  type: TrackType
  name: string
}

export type AddTrackerOptions = {
  filter?: Partial<TrackingFilter>
}

export function addTracker(tracker: Tracker, options?: AddTrackerOptions): void {
  trackers.push({
    tracker,
    options,
  })
}

export function trackConsole(options: TrackOption[]) {
  const text = options
    .map(({name, stage}) => `${name} - ${stage}`)
    .join('\n')
  console.log(text)
}