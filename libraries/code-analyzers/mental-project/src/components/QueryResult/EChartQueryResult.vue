<script lang="ts" setup>
import './echart'
import ECharts from 'vue-echarts'

const props = defineProps<{options: any}>()

// const chart = ref<EChartsType | undefined>()

// onMounted(() => {
//   const el = useCurrentElement<HTMLElement>()
//   chart.value = echarts.init(el.value!, null, { useDirtyRect: false, })

//   if (props.options) {
//     chart.value.setOption(props.options)
//   }

//   chart.value.on('click', function(params) {
//     // Print name in console
//     console.log(params.name);
//   });
// })

// watchDebounced(
//   () => props.options,
//   (val) => { val && chart && chart.value?.setOption(val) },
//   { debounce: 500, deep: true, immediate: true, },
// )

// const resetOptions = () => chart.value?.setOption(props.options) 

</script>

<template>
  <ECharts :option="options" />
</template>