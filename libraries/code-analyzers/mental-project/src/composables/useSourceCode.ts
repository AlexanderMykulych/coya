import { useNeo4j } from 'coya-ts-analyzer/browser'

export function useSourceCode() {
  const db = useNeo4j()

  const files = useAsyncState(async () => {
    const result = await db.read('match (f:file) return f')
    return result?.records.map<{ id: string }>(x => x.get('f').properties)
  }, [], {
    immediate: true,
    resetOnExecute: true,
  },)

  const fsTree = computed(() => {
    if (files.isReady && files.state.value) {
      return groupFiles(
        files.state.value.map(x => x.id.split('/')),
      )
    }
  })

  return {
    files,
    fsTree,
  }
}

function groupFiles(fs: string[][]) {
  const resultObj = {}
  fs.forEach(x => filesSegmentsToObject(resultObj, x))

  return resultObj
}

function filesSegmentsToObject(resultObj: any, segments: string[]) {
  let pointer: any = resultObj


  segments.forEach((x, i) => {
    if (i === segments.length - 1) {
      pointer[x] = true
      return;
    }
    if (!pointer[x]) {
      pointer[x] = {}
    }
    pointer = pointer[x]
  })

  return resultObj
}
