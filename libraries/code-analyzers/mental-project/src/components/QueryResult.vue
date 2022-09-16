<script lang="ts" setup>
import { queryResultComponents, QueryResultProps } from './QueryResult';

const props = defineProps<QueryResultProps>()

const cmp = computed(() => queryResultComponents.find(x => x.type === props.type)?.component)
</script>

<template>
  <div class="w-full h-full">
    <QueryResultLoader v-if="queryResult.isLoading.value" :loading="queryResult.isLoading" />
    <component
      v-else-if="queryResult.isReady.value && !!cmp"
      :is="cmp"
      :type="type"
      :queryResult="queryResult.state"
    />
  </div>
</template>