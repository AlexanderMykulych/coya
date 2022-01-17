<script lang="ts" setup>
const props = defineProps<{css: any; x:number; y: number; label: string;}>();
const blockStyle = reactive({
    display: 'flex',
    'align-items': 'unsafe center',
    'justify-content': 'unsafe center',
    width: computed(() => `${props.w - 2}px`),
    height: computed(() => `${props.h - 2}px`),
    'padding-top': 0,
    'margin-left': 0,
});
const textStyle = computed(() => props.css.text);
</script>

<template>
    <foreignObject
        style="overflow: visible; text-align: left"
        pointer-events="none"
        :style="css"
        :x="x"
        :y="y"
        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
        v-if="!!label"
    >
        <div xmlns="http://www.w3.org/1999/xhtml" :style="blockStyle" class="h-full">
            <div style="box-sizing: border-box; text-align: center">
                <div
                    style="
                        display: inline-block;
                        font-family: Helvetica;
                        line-height: 1.2;
                        pointer-events: all;
                        white-space: normal;
                        word-wrap: normal;
                    "
                >
                    <p :style="textStyle">
                        {{label}}
                    </p>
                </div>
            </div>
        </div>
    </foreignObject>
</template>