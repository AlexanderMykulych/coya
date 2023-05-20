<script lang="ts" setup>
import type { QueryResultResolvedProps } from '..';
import type { IndicatorSettings } from './types';
import { useOptions } from './useOptions';

const props = defineProps<QueryResultResolvedProps<IndicatorSettings>>()

const options = useOptions(props)
</script>

<template>
  <EChartQueryResult :options="options" />
</template>