<script lang="ts" setup>
import { RectPositioning } from "coya-core";
import { computed } from "vue";
import { PinType } from "../../core/types";
import { useCurrentEditorState } from "../../core/useCurrentEditorState";

const props = defineProps<{
    position: RectPositioning
}>();
const emit = defineEmits(["pinPress"]);
const padding = 10;
const pinW = 8;
const pinCW = pinW / 2;

const { state } = useCurrentEditorState();

const preparedPosition = computed(() => ({
    x: Number(props.position.x) - padding,
    y: Number(props.position.y) - padding,
    w: Number(props.position.w) + padding * 2,
    h: Number(props.position.h) + padding * 2,
}));
const pins = computed(() => [{
    x: preparedPosition.value.x - pinCW,
    y: preparedPosition.value.y - pinCW,
    class: "cursor-nwse-resize",
    type: PinType.TopLeft,
}, {
    x: preparedPosition.value.x - pinCW,
    y: preparedPosition.value.y + preparedPosition.value.h - pinCW,
    class: "cursor-nesw-resize",
    type: PinType.BottomLeft,
}, {
    x: preparedPosition.value.x + preparedPosition.value.w - pinCW,
    y: preparedPosition.value.y + preparedPosition.value.h - pinCW,
    class: "cursor-nwse-resize",
    type: PinType.BottomRight,
}, {
    x: preparedPosition.value.x + preparedPosition.value.w - pinCW,
    y: preparedPosition.value.y - pinCW,
    class: "cursor-nesw-resize",
    type: PinType.TopRight,
}, {
    x: preparedPosition.value.x + preparedPosition.value.w / 2 - pinCW,
    y: preparedPosition.value.y - pinCW,
    class: "cursor-ns-resize",
    type: PinType.Top,
}, {
    x: preparedPosition.value.x + preparedPosition.value.w / 2 - pinCW,
    y: preparedPosition.value.y + preparedPosition.value.h - pinCW,
    class: "cursor-ns-resize",
    type: PinType.Bottom,
}, {
    x: preparedPosition.value.x - pinCW,
    y: preparedPosition.value.y + preparedPosition.value.h / 2 - pinCW,
    class: "cursor-ew-resize",
    type: PinType.Left,
}, {
    x: preparedPosition.value.x + preparedPosition.value.w - pinCW,
    y: preparedPosition.value.y + preparedPosition.value.h / 2 - pinCW,
    class: "cursor-ew-resize",
    type: PinType.Right,
}]);
const clickPin = (pinType: PinType) => emit("pinPress", pinType);

</script>

<template>
    <rect
        :x="position.x - padding"
        :y="position.y - padding"
        :width="position.w + padding * 2"
        :height="position.h + padding * 2"
        fill="#00d0ff4a"
        stroke="black"
        stroke-dasharray="5 5"
    />
    <rect
        v-for="(pin, index) in pins"
        :key="index"
        :x="pin.x"
        :y="pin.y"
        :width="pinW"
        :height="pinW"
        fill="white"
        stroke="black"
        :class="pin.class"
        @mousedown="clickPin(pin.type)"
    />
</template>

<style>
.cursor-nwse-resize {
    cursor: nwse-resize;
}
.cursor-nesw-resize {
    cursor: nesw-resize;
}
.cursor-ew-resize {
    cursor: ew-resize;
}
.cursor-ns-resize {
    cursor: ns-resize;
}
</style>