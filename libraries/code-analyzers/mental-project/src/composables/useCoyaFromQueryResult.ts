import { generateCoyaFromGraphResult } from 'coya-ts-analyzer/browser'
import type { UseAsyncStateReturn } from "@vueuse/core";
import type { QueryResult } from 'coya-ts-analyzer/browser'
import type { Ref } from "vue";

export function useCoyaFromQueryResult(queryResult: UseAsyncStateReturn<QueryResult | null, true>, processing: Ref<boolean>) {
  return computedAsync(
    () => queryResult.isReady && queryResult.state?.value ? generateCoyaFromGraphResult(queryResult.state.value) : null,
    null,
    processing,
  )
}