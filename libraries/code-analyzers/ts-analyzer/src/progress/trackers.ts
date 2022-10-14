import type { Tracker, TrackOption } from "./trackTypes";


export const trackers: Tracker[] = [
  trackConsole,
];

export function addTracker(tracker: Tracker): void {
  trackers.push(tracker)
}

export function trackConsole(options: TrackOption[]) {
  const text = options
    .map(({name, stage}) => `${name} - ${stage}`)
    .join('\n')
  console.log(text)
}