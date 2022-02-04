<script lang="ts" setup="ctx">
import type { WidgetConfig } from '../WidgetConfig';
import { widgetMaping } from './widgetMaping';
import formulaWidget from './formulaWidget.vue';

const props = defineProps<{ widgetConfig: WidgetConfig }>();
const component = computed(() => {
    const config = widgetMaping.find(x => x.path.test(props.widgetConfig.path));
    if (config)
        return config.component;

    return formulaWidget;
});
</script>
<template>
  <component
    :is="component"
    v-if="component"
    v-bind="{...$props, ...$attrs}"
  />
</template>
