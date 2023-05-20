import { generateCoyaFromGraphResult } from 'coya-ts-analyzer/browser'
import type { QueryResult } from 'coya-ts-analyzer/browser'
import type { Ref } from "vue";

export function useCoyaFromQueryResult(queryResult: Ref<QueryResult | null>, processing: Ref<boolean>) {
  return computedAsync(
    () => queryResult.value ? generateCoyaFromGraphResult(queryResult.value) : null,
    null,
    processing,
  )
}