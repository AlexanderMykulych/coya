<script lang="ts" setup>
import { echarts } from './echart'
import type { EChartsType } from 'echarts';

const props = defineProps<{options: any}>()

const chart = ref<EChartsType | undefined>()
  
onMounted(() => {
  const el = useCurrentElement<HTMLElement>()
  chart.value = echarts.init(el.value)

  if (props.options) {
    chart.value.setOption(props.options)
  }
})

watchDebounced(
  () => props.options,
  (val) => { val && chart && chart.value?.setOption(val) },
  { debounce: 500, deep: true, immediate: true, },
)

</script>

<template>
  <div class="w-full h-full">
  </div>
</template>