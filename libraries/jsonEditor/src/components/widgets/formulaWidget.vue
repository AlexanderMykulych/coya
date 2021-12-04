<script lang="ts" setup>
import { computed, reactive, onScopeDispose } from 'vue';
import { WidgetConfig } from '../WidgetConfig';

const props = defineProps<{widgetConfig: WidgetConfig}>();
const emit = defineEmits(['valueChange']);
const numbValue = computed(() => Number(props.widgetConfig.row.value));
const isNumber = computed(() => !isNaN(numbValue.value));
const isString = computed(() => typeof props.widgetConfig.row.value === "string");
const coef = 3;
const clickInfo = reactive({
    enabled: false,
    x: 0,
    initValue: 0
});
const onMousedown = (event: MouseEvent) => {
    clickInfo.x = event.x;
    clickInfo.enabled = true;
    clickInfo.initValue = numbValue.value;
};
const onMouseup = (event: MouseEvent) => {
    if (clickInfo.enabled) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
    }
    clickInfo.enabled = false;
}
const onMousemove = (event: MouseEvent) => {
    if (clickInfo.enabled) {
        const res = clickInfo.initValue + (event.x - clickInfo.x) * coef;
        emit('valueChange', isString.value ? `${res}` : res);
    }
};
const onClick = (event: MouseEvent) => {
    if (clickInfo.enabled) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
    }
}
window.addEventListener("mouseup", onMouseup);
window.addEventListener("mousemove", onMousemove);
window.addEventListener("click", onClick);

onScopeDispose(() => {
    window.removeEventListener("mouseup", onMouseup);
    window.removeEventListener("mousemove", onMousemove);
    window.removeEventListener("click", onClick);
});
</script>

<template>
  <div class="text-dark-100 w-full h-3.5 flex">
    <div v-if="isNumber"
        class="cursor-ew-resize inline-block">
        <i-uil:arrows-resize
            @mousedown="onMousedown"
        />
    </div>
    <!-- <input
        :value="widgetConfig.row.value"
        type="text"
        class="bg-gray-600 text-white"
        @input="$emit('valueChange', $event?.target?.value)"
    /> -->
  </div>
</template>

<style>
.cursor-ew-resize {
    cursor:  ew-resize;
}
</style>