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
    component: defineAsyncComponent(() => import('./Indicator/IndicatorQueryResult.vue')),
    settingComponent: defineAsyncComponent(() => import('./Indicator/IndicatorQueryResultSettings.vue')),
  },
  {
    type: QueryResultType.Bar,
    component: defineAsyncComponent(() => import('./Bar/BarQueryResult.vue')),
    settingComponent: defineAsyncComponent(() => import('./Bar/BarQueryResultSettings.vue')),
  },
]

export type QueryResultProps<TSettings = any> = {
  type: QueryResultType
  queryResult: UseAsyncStateReturn<QueryResult | null, true>
  settings: TSettings
}

export type QueryResultResolvedProps<TSettings = any> = {
  type: QueryResultType
  queryResult: Ref<QueryResult>
  settings: TSettings
}