<script lang="ts" setup>
import Coya from 'coya-vue-component'
import 'coya-vue-component/dist/style.css'
import type { QueryResultResolvedProps } from '.';

const props = defineProps<QueryResultResolvedProps>()

const coyaProcessing = ref(false)
const coya = useCoyaFromQueryResult(props.queryResult, coyaProcessing)
</script>

<template>
  <Coya
    v-if="coya"
    class="w-full h-90"
    id="diagram"
    :config="coya"
  >
  </Coya>
</template>