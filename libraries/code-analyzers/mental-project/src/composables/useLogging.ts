const logs = ref<any[]>([])
const openDialog = ref(false)

const log = (line: any) => logs.value.push(line)
const openLogs = () => openDialog.value = true
const names = computed(() => [...new Set(logs.value.map(x => x.name))])

const getLogsByName = (name: string) => logs.value.filter(x => x.name === name)
export function useLogging() {

  return {
    log,
    openLogs,
    openDialog,
    logs,
    names,
    getLogsByName,
  }
}