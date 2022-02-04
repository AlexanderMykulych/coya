<script lang="ts" setup>
import type { WidgetConfig } from '../WidgetConfig';

const props = defineProps<{ widgetConfig: WidgetConfig }>();

</script>

<template>
  <div class="text-dark-100 w-500 h-3.5 opacity-30 hover:opacity-100 hover:cursor-pointer">
    <i-foundation:widget />
  </div>
</template>
