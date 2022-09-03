<script lang="ts" setup>
import { useNeo4j, QueryResult, generateCoyaFromGraphResult } from 'coya-ts-analyzer/browser'
import Coya from 'coya-vue-component'
import 'coya-vue-component/dist/style.css'

const query = ref('')
const queryResult = ref<QueryResult | null>(null)

const db = useNeo4j()

const executeQuery = async () => {
  queryResult.value = await db.read(query.value)
}

const coya = computedAsync(() => queryResult.value ? generateCoyaFromGraphResult(queryResult.value) : null)
</script>

<template>
  <div class="h-full flex">
    <div class="w-full h-full flex-col">
      <div class="flex justify-start mb-2 pb-2" b="b-0.5 coolGray">
        <button
          class="btn"
          :disabled="!query"
          @click="executeQuery"
        >Execute</button>
      </div>
      <Query
        v-model="query"
      />
    </div>
    <div class="w-full">
      <Coya
        v-if="coya"
        class="w-full h-full"
        id="diagram"
        :config="coya"
        :key="coya"
      >
      </Coya>
    </div>
  </div>
</template>