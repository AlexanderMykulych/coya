import { BlockPositioning, LineBlockElement } from "../types";
import { computed, Ref } from "vue";
import { BlockStyle, FormulaValue } from "../descriptionTypes";
import { getFormulaValue } from "./getFormulaValue";
import { TransformSetting } from "..";

export function lineBlockPosition(blocksPositions: Ref<BlockPositioning[]>, block: LineBlockElement,
    setting: TransformSetting, blockStyle?: BlockStyle): BlockPositioning {
   
    const getValueByCtx = (x?: number | FormulaValue, def?: any) =>
        getFormulaValue(x, blocksPositions, { defaultValue: def, ...setting });
    const arrowHeadSize = 10;
    const fromBlock = getBlockName(block.from);
    const toBlock = getBlockName(block.to);
    let str = "";
    if (hasSpecificPoint(block.from)) {
        str += `, startPoint: ${block.from}`;
    }
    if (hasSpecificPoint(block.to)) {
        str += `, endPoint: ${block.to}`;
    }
    const boxs = `${block.from}.x, ${fromBlock}.y, ${fromBlock}.w, ${fromBlock}.h, ${toBlock}.x, ${toBlock}.y, ${toBlock}.w, ${toBlock}.h`;
    const meta = getValueByCtx(`_.fn.getBoxToBoxArrowPath(${boxs}, {padEnd: ${arrowHeadSize}, padStart: ${arrowHeadSize} ${str} })`, {});

    const x1 = computed(() => meta.value.results.x1);
    const y1 = computed(() => meta.value.results.y1);
    const x2 = computed(() => meta.value.results.x2);
    const y2 = computed(() => meta.value.results.y2);
    return {
        blockId: block.id,
        position: {
            x1,
            y1,
            x2,
            y2,
            x: computed(() => Math.min(x1.value, x2.value)),
            y: computed(() => Math.min(y1.value, y2.value)),
            w: computed(() => Math.abs(x1.value - x2.value)),
            h: computed(() => Math.abs(y1.value - y2.value)),
            meta: computed(() => ({
                ...meta.value,
                arrowHeadSize
            }))
        }
    };
}
const getBlockName = (str: string) => {
    return str.split(".")?.[0];
}
const hasSpecificPoint  = (str: string) => {
    return str.split(".").length === 2;
}
const getDefaultPosition = (blockId: string) => ({
    blockId: blockId,
    position: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        meta: {
            arrowHeadSize: 0,
            results: {},
            path: "",
        },
    },
});