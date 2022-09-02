export default `
function findLast(array, predicate) {
    let l = array.length;
    while (l--) {
        if (predicate(array[l], l, array))
            return array[l];
    }
    return null;
}
function parseHrtimeToSeconds(hrtime) {
  var seconds = (hrtime[0] + (hrtime[1] / 1e9));
  return seconds;
}
const _perfomancePolyfill = () => {
  if ("performance" in window === false) {
    window.performance = {};
  }

  if ("now" in window.performance === false) {
    let nowOffset = Date.now();

    window.performance.now = () => Date.now() - nowOffset;
  }
}

const _hrtime = (previousTimestamp) => {
  _perfomancePolyfill();
  const baseNow = Math.floor((Date.now() - performance.now()) * 1e-3);
  const clocktime = performance.now() * 1e-3;
  let seconds = Math.floor(clocktime) + baseNow;
  let nanoseconds = Math.floor((clocktime % 1) * 1e9);

  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds, nanoseconds];
};
const NS_PER_SEC = 1e9;
_hrtime.bigint = (time) => {
  const diff = _hrtime(time);
  return (diff[0] * NS_PER_SEC + diff[1]);
};
if ((typeof process === 'undefined' || typeof process.hrtime === 'undefined') && typeof window.process === 'undefined') {
  window.process = {};
}
const hrtime = typeof process.hrtime === 'undefined' ? (window.process.hrtime = _hrtime) : process.hrtime;

const logs = []
globalThis.__logStart = (id) => {
  logs.push({
    id,
    type: 'start',
    startTime: hrtime(),
  })
}
globalThis.__logEnd = (id) => {
  const start = findLast(logs, x => x.id === id && x.type === 'start')
  const execTime = start?.startTime ? parseHrtimeToSeconds(hrtime(start.startTime)) : undefined
  logs.push({
    id,
    type: 'end',
    execTime,
  })
}
globalThis.__getLogs = () => logs

export const __logStart = globalThis.__logStart
export const __logEnd = globalThis.__logEnd
`
