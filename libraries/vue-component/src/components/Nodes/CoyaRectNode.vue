<script lang="ts" setup>
import { asyncComputed } from '@vueuse/core';
import { Block, BlockStyle, EnterSetting, RectPositioning } from 'coya-core';
import { computed, onMounted, reactive, ref } from 'vue';
import { useAssets } from '../../logic/useAssets';

const props = defineProps<{
    block: Block;
    positioning: RectPositioning;
    blockStyle: BlockStyle;
}>();

const { getText, getImgUrl } = useAssets();

// image
const imgUrl = asyncComputed(
    async () => await getImgUrl(props.blockStyle?.img),
);

// code
const isCode = computed(() => !!props.blockStyle?.code);

// iframe
const isIFrame = computed(() => !!props.blockStyle.iframe);
const iFrameSrc = computed(() => props.blockStyle.iframe);

// style
const cssStyle = computed(() => ({
    fontSize: '0.3em',
    color: 'black',
    fillWeight: 1.2,
    hachureAngle: 60,
    hachureGap: 8,
    roughness: 4.8,
    ...props.blockStyle?.css,
}));

// animation
const gEl = ref<SVGSVGElement | null>(null);
const groupEl = ref<SVGSVGElement | null>(null);


onMounted(() => {
    const enter = props.block.enter;
    if (enter && enter.from && enter.to) {
    }
});

const textBlockStyle = reactive({
    display: 'flex',
    'align-items': 'unsafe center',
    'justify-content': 'unsafe center',
    width: computed(() => `${props.positioning.w - 2}px`),
    height: computed(() => `${props.positioning.h - 2}px`),
    'padding-top': 0,
    'margin-left': 0,
});
const textStyle = computed(() => {
    const textStyle = props.blockStyle?.css?.text;
    if (textStyle) {
        if (textStyle.fontSize === 'auto') {
            const fontSize = computed(() => `${props.positioning.w / 6}px`);
            return reactive({
                ...textStyle,
                fontSize,
            });
        }
        return {
            ...textStyle,
        };
    }
});

const label = computed(() =>props.block.label);
</script>

<template>
    <g ref="groupEl" class="rect-node">
        <svg
            ref="gEl"
            :x="positioning.x"
            :y="positioning.y"
            :width="positioning.w"
            :height="positioning.h"
        >
            <Rough :w="positioning.w" :h="positioning.h" :css="cssStyle" class="rect-node" />
            <image
                v-if="imgUrl"
                :href="imgUrl"
                x="15"
                y="15"
                :width="positioning.w - 30"
                :height="positioning.h - 30"
                :style="cssStyle"
            />
            <foreignObject
                style="overflow: visible; text-align: left"
                pointer-events="none"
                :style="cssStyle"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            >
                <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    :style="textBlockStyle"
                    class="w-full h-full"
                >
                    <div
                        style="
                            box-sizing: border-box;
                            text-align: center;
                            line-height: 1.2;
                            pointer-events: all;
                            white-space: normal;
                            word-wrap: normal;
                        "
                        class="w-full h-full flex justify-center items-center"
                    >
                        <Code v-if="isCode" :code="blockStyle.code" :label="label" :style="textStyle"/>
                        <iframe
                            v-else-if="isIFrame"
                            :src="iFrameSrc"
                            frameborder="0" 
                            class="w-full h-full"
                        />
                        <p
                            v-else
                            :style="textStyle"
                            class="h-max"
                            v-html="label"
                        ></p>
                    </div>
                </div>
            </foreignObject>
        </svg>
    </g>
</template>

<style>
.rect-node {
    animation: enter 3s linear forwards;
}
</style>