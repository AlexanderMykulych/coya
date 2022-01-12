<script setup lang="ts">
const props = defineProps<{text: string; isHtml?: boolean; x: number; y: number;}>();

const textStyle = computed(() => ({
    fontSize: "0.8em",
    display: "inline-block",
    "align-items": "unsafe center",
    "justify-content": "unsafe center",
    "padding-top": `${props.y}px`,
    "margin-left": `${props.x}px`
}));
</script>

<template>
    <foreignObject
        style="overflow: visible; text-align: left;"
        pointer-events="none"
        width="100%"
        height="100%"
        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
    >
        <div xmlns="http://www.w3.org/1999/xhtml" :style="textStyle">
            <div style="box-sizing: border-box; text-align: center; display: inline-block; background-color: yellow;">
                <div
                    style="display: inline-block; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "
                >
                    <slot>
                        <p v-if="isHtml" v-html="text"></p>
                        <p else>{{text}}</p>
                    </slot>
                </div>
            </div>
        </div>
    </foreignObject>
</template>