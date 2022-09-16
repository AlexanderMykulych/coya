import type { UseAsyncStateReturn } from "@vueuse/core";
import type { QueryResult } from "coya-ts-analyzer";
import type { Ref } from "vue";
import { QueryResultType } from "../../types";

export const queryResultComponents = [
  {
    type: QueryResultType.Graph,
    component: defineAsyncComponent(() => import('./CoyaQueryResult.vue')),
  },
  {
    type: QueryResultType.Indicator,
    component: defineAsyncComponent(() => import('./IndicatorQueryResult.vue')),
  },
]

export type QueryResultProps = {
  type: QueryResultType
  queryResult: UseAsyncStateReturn<QueryResult | null, true>
}

export type QueryResultResolvedProps = {
  type: QueryResultType
  queryResult: Ref<QueryResult>
}