<script lang="ts" setup>
import { Block, BlockStyle, EnterSetting, RectPositioning } from 'coya-core';
import { computed, onMounted, reactive, Ref, ref, watch } from 'vue';
import { gsap } from 'gsap';
import rough from 'roughjs';
import { RoughSVG } from 'roughjs/bin/svg';
import { getImageUrl, useAssets } from '../../logic/useAssets';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/components/prism-json.min.js';
import 'prismjs/components/prism-css.min.js';
import { getExtension } from '../../logic/getExtension';
import { fastDeepEqual } from 'coya-util';

const props = defineProps<{
    block: Block;
    positioning: RectPositioning;
    blockStyle: BlockStyle;
}>();

const { getContent, getImgUrl } = useAssets();
const imgUrl = asyncComputed(
    async () => await getImgUrl(props.blockStyle?.img),
);

const isCode = computed(() => !!props.blockStyle?.code);

const codeHtml = asyncComputed(async () => {
    if (isCode.value) {
        const code = await getContent(props.blockStyle?.code);
        const ext = getExtension(props.blockStyle?.code);
        return Prism.highlight(code, Prism.languages[ext], ext)?.trim();
    }
    return null;
});

const cssStyle = computed(() => ({
    fontSize: '0.3em',
    color: 'black',
    fillWeight: 1.2,
    hachureAngle: 60,
    hachureGap: 8,
    roughness: 4.8,
    ...props.blockStyle?.css,
}));
const gEl = ref<SVGSVGElement | null>(null);

const runEnter = (enter: EnterSetting) => {
    gsap.fromTo(gEl.value, enter.from, enter.to);
};

onMounted(() => {
    const enter = props.block.enter;
    if (enter && enter.from && enter.to) {
        runEnter(enter);
        showGElement();
    }
    watch(
        () => props.positioning.x,
        (val) => gEl.value?.setAttribute('x', val),
    );
    watch(
        () => props.positioning.y,
        (val) => gEl.value?.setAttribute('y', val),
    );
    watch(
        () => props.positioning.w,
        (val) => {
            gEl.value?.setAttribute('width', val);
        },
    );
    watch(
        () => props.positioning.h,
        (val) => {
            gEl.value?.setAttribute('height', val);
        },
    );
});
const showGElement = () => {
    gsap.to(gEl.value, {
        duration: 0,
        attr: {
            x: props.positioning.x,
            y: props.positioning.y,
            width: props.positioning.w,
            height: props.positioning.h,
        },
    });
};


const textStyle = reactive({
    display: 'flex',
    'align-items': 'unsafe center',
    'justify-content': 'unsafe center',
    width: computed(() => `${props.positioning.w - 2}px`),
    height: computed(() => `${props.positioning.h - 2}px`),
    'padding-top': computed(() => `0px`),
    'margin-left': computed(() => `0px`),
});

const label = computed(() =>
    isCode.value ? codeHtml.value : props.block.label,
);
</script>

<template>
    <svg ref="gEl">
        <Rough :w="positioning.w" :h="positioning.h" :css="cssStyle"/>
        <image v-if="imgUrl" :href="imgUrl" width="100%" height="100%" />
        <foreignObject
            style="overflow: visible; text-align: left"
            pointer-events="none"
            :style="cssStyle"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
        >
            <div xmlns="http://www.w3.org/1999/xhtml" :style="textStyle">
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
                        <pre v-if="isCode" class="language-"><code class="language-" v-html="label"></code></pre>
                        <p v-else v-html="label"></p>
                    </div>
                </div>
            </div>
        </foreignObject>
    </svg>
</template>

<style></style>
