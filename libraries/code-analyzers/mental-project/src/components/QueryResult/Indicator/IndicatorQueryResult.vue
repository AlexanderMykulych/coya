<script lang="ts" setup>
import { echarts } from '../echart'
import type { QueryResultResolvedProps } from '..';
import type { IndicatorSettings } from './types';
import { useOptions } from './useOptions';
import type { EChartsType } from 'echarts';

const props = defineProps<QueryResultResolvedProps<IndicatorSettings>>()

const options = useOptions(props)
const chart = ref<EChartsType | undefined>()
  
onMounted(() => {
  const el = useCurrentElement<HTMLElement>()
  chart.value = echarts.init(el.value)

  chart.value.setOption(options.value)
})

watchDebounced(
  () => options.value,
  (val) => { chart.value?.setOption(val) },
  { debounce: 500, deep: true },
)

</script>

<template>
  <div class="w-full h-full">
  </div>
</template>