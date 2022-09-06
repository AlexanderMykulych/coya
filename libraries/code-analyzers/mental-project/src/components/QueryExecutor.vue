<script lang="ts" setup>
import { useNeo4j, generateCoyaFromGraphResult } from 'coya-ts-analyzer/browser'
import Coya from 'coya-vue-component'
import 'coya-vue-component/dist/style.css'

const props = defineProps<{query: string}>()
const emits = defineEmits(['update:query'])
const query = computed({
  get: () => props.query,
  set: (val) => emits('update:query', val),
})

const db = useNeo4j()

const queryResult = useAsyncState(() => db.read(query.value), null, {
  immediate: false,
  resetOnExecute: true,
})


const coyaProcessing = ref(false)
const coya = computedAsync(
  () => queryResult.isReady && queryResult.state?.value ? generateCoyaFromGraphResult(queryResult.state.value) : null,
  null,
  coyaProcessing,
)
</script>

<template>
  <div class="h-full flex" pb-5>
    <div class="w-40% h-full flex-col">
      <div class="flex justify-start mb-2 pb-2" b="b-0.5 coolGray">
        <button
          class="btn"
          :disabled="!query"
          @click="queryResult.execute()"
        >Execute</button>
      </div>
      <div class="h-95%">
        <Query
          v-model="query"
        />
      </div>
    </div>
    <div class="w-full flex justify-center align-center">
      <template v-if="queryResult.isLoading.value || coyaProcessing">
        <div self-center flex="~ col">
          <span class="loader ml-4 mb-3"></span>
          ...{{ coyaProcessing ? 'Processing result' : 'Loading'}}
        </div>
      </template>
      <Coya
        v-else-if="coya"
        class="w-full h-90"
        id="diagram"
        :config="coya"
      >
      </Coya>
    </div>
  </div>
</template>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid black;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>