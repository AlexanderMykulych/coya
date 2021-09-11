<script setup lang="ts">

const props = defineProps<{ x: number, y: number }>();
const width = ref(50);
const height = ref(14);

const calcX = computed(() => props.x);
const calcY = computed(() => props.y - height.value);

const prepX = computed(() => props.x.toFixed(1));
const prepY = computed(() => props.y.toFixed(1));

const style = reactive({
    fontSize: "8px"
});
</script>

<template>
    <svg :x="calcX" :y="calcY" :width="width" :height="height" pointer-events="none">
        <g>
            <rect
                width="100%"
                height="100%"
                x="0"
                y="0"
                fill="#32b9f83d"
                stroke-width="0.2"
                stroke="black"
            />
            <foreignObject
                style="overflow: visible; text-align: left;"
                pointer-events="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            >
                <div xmlns="http://www.w3.org/1999/xhtml">
                    <div class="pos-cnt" :style="style">
                        <div>[{{ prepX }}; {{ prepY }}]</div>
                    </div>
                </div>
            </foreignObject>
        </g>
    </svg>
</template>

<style scoped>
.pos-cnt {
    box-sizing: border-box;
    text-align: center;
}
.pos-cnt > div {
    display: inline-block;
    font-family: Helvetica;
    color: #000000;
    line-height: 1.2;
    pointer-events: all;
    white-space: normal;
    word-wrap: normal;
}
</style>