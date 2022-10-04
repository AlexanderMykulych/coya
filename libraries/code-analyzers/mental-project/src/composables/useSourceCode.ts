import { Relationship, useNeo4j } from 'coya-ts-analyzer/browser'
import type { LocatedEntity } from 'coya-ts-analyzer/browser'
import { isNotNullOrUndefined } from 'coya-util'

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

  const getSourceFileEntities = async (id: string): Promise<LocatedEntity[]> => {
    const query = `match(node) where node.filePath = $id return node order by node.start`

    const result = await db.read(query, { id })
    return result
      ?.records
      .map(x => x.get('node').properties)
      .filter((x): x is LocatedEntity => isNotNullOrUndefined(x.start) && isNotNullOrUndefined(x.end))
      ?? []
  }

  const getSourceFileRelations = async (id: string): Promise<FullRelation[]> => {
    const query = `
    match (n1)-[r]->(n2)
    where r.from starts with $id or r.to starts with $id
    return r,n1,n2`

    const result = await db.read(query, { id })
    return result
      ?.records
        .map<FullRelation>(x => ({
          ...x.get('r').properties,
          toNode: x.get('n2').properties,
          fromNode: x.get('n1').properties,
        })) ?? []
  }

  return {
    files,
    fsTree,
    getSourceFileEntities,
    getSourceFileRelations,
  }
}

function groupFiles(fs: string[][]) {
  const resultObj = {}
  fs.forEach(x => filesSegmentsToObject(resultObj, x))

  return fsObjectToArray(resultObj)
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

type Item = {
  name: string
  children?: Item[]
}

type FullRelation = Relationship & {
  toNode: LocatedEntity
  fromNode: LocatedEntity
}

function fsObjectToArray(obj: any): Item[] {
  return Object.entries(obj)
    .map(([name, value]) => ({
      name,
      children: value === true ? undefined : fsObjectToArray(value),
    }))
}
