import type { TrackOption } from "coya-ts-analyzer"

export type LogItem = {
  name: string
  msg: string
  data: TrackOption
}

const logs = ref<LogItem[]>([])

const openType = ref<'dialog' | 'footer'>('footer')
const open = ref(false)

const openDialog = computed(() => open.value && openType.value === 'dialog')
const openFooter = computed(() => open.value && openType.value === 'footer')

const log = (line: LogItem) => logs.value.push(line)
const openLogs = () => open.value = true
const names = computed(() => [...new Set(logs.value.map(x => x.name))])

const getLogsByName = (name: string) => logs.value.filter(x => x.name === name)
export function useLogging() {
  return {
    log,
    openLogs,
    openDialog,
    openFooter,
    logs,
    names,
    getLogsByName,
  }
}