import { ActionEntity, ActionEntityType, CodeInfo, CodeInfoType, Relationship, RelationType } from "../../analysis/types"
import { useNeo4j } from "../../neo4j/useNeo4j"
import type { LogItem, StartLogItem } from "../shim"


export async function collectLogsAfterTest(insertToDb: true): Promise<void>
export async function collectLogsAfterTest(): Promise<CodeInfo[]>
export async function collectLogsAfterTest(insertToDb?: true): Promise<CodeInfo[] | void> {
  if (!globalThis.__getLogs) {
    return
  }

  const logs = globalThis.__getLogs()

  const codeInfos = logsToCodeInfo(logs)

  if (insertToDb) {
    const db = useNeo4j()
    await db.insertCodeInfos(codeInfos);
  } else {
    return codeInfos
  }
}


export function logsToCodeInfo(logs: LogItem[]): CodeInfo[] {
  return logs
    .flatMap<CodeInfo>((item, index, items) => {
      const result = []
      if (item.type === 'end') {
        const callEntity: ActionEntity = {
          type: CodeInfoType.Entity,
          entityType: ActionEntityType.Call,
          id: getCallActionId(item, index),
          executionTime: item.execTime,
        }
        const callRelation: Relationship = {
          type: CodeInfoType.Relationship,
          relationType: RelationType.CallEntity,
          from: callEntity.id,
          to: item.id,
        }

        result.push(callEntity, callRelation)

        const [parentStartItem, parentIndex] = findParentStartLogFromIndex(items, index, item.id)

        if (parentStartItem) {
          const parentRelation: Relationship = {
            type: CodeInfoType.Relationship,
            relationType: RelationType.Parent,
            from: getCallActionId(parentStartItem, parentIndex),
            to: callEntity.id,
          }
          result.push(parentRelation)
        }
      }
      return result
    })
}

export function findStartLogFromIndex(items: LogItem[], index: number, id: string): StartLogItem {
  for (let i = index - 1; i >= 0; i--) {
    const startItem = items[i]
    if (startItem.type === 'start' && startItem.id === id) {
      return startItem
    }
  }
  throw 'Can not find start element for: ' + id
}

export function findParentStartLogFromIndex(items: LogItem[], index: number, id: string): [StartLogItem, number] | [null, null] {
  for (let i = index - 1; i >= 0; i--) {
    const startItem = items[i]
    if (startItem.type === 'start' && startItem.id !== id) {
      return [startItem, i]
    }
  }

  return [null, null]
}

export function getCallActionId(item: LogItem, index: number): string {
  // return `call:${item.id}`
  return `call[${index}]:${item.id}`
}