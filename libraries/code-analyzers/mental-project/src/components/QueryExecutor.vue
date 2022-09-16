<script lang="ts" setup>
import type { Diagram } from '../store/useDiagrams'

const props = defineProps<Diagram>()

const emits = defineEmits(['update:query'])

const query = useVModel(props, 'query', emits)
const type = useVModel(props, 'type', emits)

const queryResult = useQueryResult(query)

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

        <QueryResultType class="ml-6" v-model="type" />
      </div>
      <div class="h-95%">
        <Query
          v-model="query"
        />
      </div>
    </div>
    <div class="w-full flex justify-center align-center">
      <QueryResult :key="id" :type="type" :queryResult="queryResult" />
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