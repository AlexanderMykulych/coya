<script lang="ts" setup="ctx">
import type { WidgetConfig } from '../WidgetConfig';
import { widgetMaping } from './widgetMaping';
import formulaWidget from './formulaWidget.vue';

const props = defineProps<{
    widgetConfig: WidgetConfig
    rootPath?: string
}>();
const component = computed(() => {
    const root = props.rootPath ? `${props.rootPath}.` : '';
    const config = widgetMaping.find(x => x.path.test(`${root}${props.widgetConfig.path}`));
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
