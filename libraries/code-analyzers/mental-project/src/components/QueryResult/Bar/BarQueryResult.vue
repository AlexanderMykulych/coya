<script lang="ts" setup>
import type { QueryResultResolvedProps } from '..';
import type { BarSettings } from './types';

import { useOptions } from './useOptions';

const props = defineProps<QueryResultResolvedProps<BarSettings>>()

const options = useOptions(props)
</script>

<template>
  <EChartQueryResult :options="options" />
</template>