<script lang="ts" setup>
import './echart'
import ECharts from 'vue-echarts'

defineProps<{options: any}>()
</script>

<template>
  <ECharts :option="options" />
</template>