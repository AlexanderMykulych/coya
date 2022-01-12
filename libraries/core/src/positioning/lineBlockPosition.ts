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
    const boxs = `${block.from}.x, ${block.from}.y, ${block.from}.w, ${block.from}.h, ${block.to}.x, ${block.to}.y, ${block.to}.w, ${block.to}.h`;
    const meta = getValueByCtx(`_.fn.getBoxToBoxArrow(${boxs}, {padEnd: ${arrowHeadSize}, padStart: ${arrowHeadSize}})`);
    const x1 = computed(() => meta.value.x1);
    const y1 = computed(() => meta.value.y1);
    const x2 = computed(() => meta.value.x2);
    const y2 = computed(() => meta.value.y2);
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