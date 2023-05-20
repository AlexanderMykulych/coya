<script lang="ts" setup>
import './echart'
import ECharts from 'vue-echarts'

defineProps<{options: any}>()
const attrs = useAttrs()

const chartEl = ref()

const listeners = computed(() =>
  Object.fromEntries(
    Object.entries(attrs)
      .filter(([key]) => key.startsWith('on'))
  )
)

defineExpose({
  chart: computed(() => chartEl.value?.chart),
})
</script>

<template>
  <ECharts
    ref="chartEl"
    :option="options"
    :update-options="{ notMerge: true, lazyUpdate: true }"
    :autoresize="true"
    v-on="listeners"
  />
</template>