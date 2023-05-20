import { useNeo4j } from "coya-ts-analyzer/browser"
import type { Ref } from "vue"

export function useQueryResult(query: Ref<string>) {
  const db = useNeo4j()
  return useAsyncState(
    () => db.read(query.value),
    null,
    {
      immediate: false,
      resetOnExecute: true,
    },
  )
}