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
    const meta = getValueByCtx(`_.fn.getBoxToBoxArrow(${boxs}, {padEnd: ${arrowHeadSize}})`);
    return {
        blockId: block.id,
        position: {
            x1: computed(() => meta.value.x1),
            y1: computed(() => meta.value.y1),
            x2: computed(() => meta.value.x2),
            y2: computed(() => meta.value.y2),
            meta: computed(() => ({
                ...meta.value,
                arrowHeadSize
            }))
        }
    };
}