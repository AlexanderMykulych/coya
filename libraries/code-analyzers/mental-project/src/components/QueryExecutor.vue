<script lang="ts" setup>
import { useNeo4j, QueryResult, generateCoyaFromGraphResult } from 'coya-ts-analyzer/browser'
import Coya from 'coya-vue-component'
import 'coya-vue-component/dist/style.css'

const props = defineProps<{query: string}>()
const emits = defineEmits(['update:query'])
const query = computed({
  get: () => props.query,
  set: (val) => emits('update:query', val),
})

const queryResult = ref<QueryResult | null>(null)

const db = useNeo4j()

const executeQuery = async () => {
  queryResult.value = null
  queryResult.value = await db.read(query.value)
}

const coya = computedAsync(() => queryResult.value ? generateCoyaFromGraphResult(queryResult.value) : null)
</script>

<template>
  <div class="h-full flex" pb-5>
    <div class="w-full h-full flex-col">
      <div class="flex justify-start mb-2 pb-2" b="b-0.5 coolGray">
        <button
          class="btn"
          :disabled="!query"
          @click="executeQuery"
        >Execute</button>
      </div>
      <div class="h-95%">
        <Query
          v-model="query"
        />
      </div>
    </div>
    <div class="w-full">
      <Coya
        v-if="coya"
        class="w-full h-90"
        id="diagram"
        :config="coya"
      >
      </Coya>
    </div>
  </div>
</template>