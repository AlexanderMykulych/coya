import { BlockPositioning, LineBlockElement } from "../types";
import { computed, Ref } from "@vue/reactivity";
import { isRectPositioning } from "../typeGuards";
import { getNumber } from "./getNumber";
import { BlockStyle, FormulaValue } from "../descriptionTypes";
import { getFormulaValue } from "./getFormulaValue";

export function lineBlockPosition(blocksPositions: Ref<BlockPositioning[]>, block: LineBlockElement,
    blockStyle?: BlockStyle): BlockPositioning {
    const blockFromPos = computed(() => blocksPositions.value
        ?.find(x => x.blockId === block.from));
    const blockToPos = computed(() => blocksPositions.value
        ?.find(x => x.blockId === block.to));
    const isToRighter = computed(() =>
        blockFromPos.value?.position
        && blockToPos.value?.position
        && isRectPositioning(blockFromPos.value?.position)
        && isRectPositioning(blockToPos.value?.position)
        && blockFromPos.value.position.x < blockToPos.value.position.x
    );
    const getValueByCtx = (x?: number | FormulaValue) => getFormulaValue(x, blocksPositions);
    const indentX1 = getValueByCtx(blockStyle?.position?.indentX1 ?? blockStyle?.position?.indentX);
    const indentX2 = getValueByCtx(blockStyle?.position?.indentX2 ?? blockStyle?.position?.indentX);
    const indentY1 = getValueByCtx(blockStyle?.position?.indentY1 ?? blockStyle?.position?.indentY);
    const indentY2 = getValueByCtx(blockStyle?.position?.indentY2 ?? blockStyle?.position?.indentY);
    return {
        blockId: block.id,
        position: {
            x1: computed(() => {
                const blockPos = blockFromPos.value;
                if (isRectPositioning(blockPos?.position) && blockPos?.position.x) {
                    return getNumber(blockPos.position.x) + (!isToRighter.value ? 0 : getNumber(blockPos.position.width)) + indentX1.value;
                }
                return indentX1.value;
            }),
            y1: computed(() => {
                const blockPos = blockFromPos.value;
                if (isRectPositioning(blockPos?.position) && blockPos?.position.y) {
                    return getNumber(blockPos?.position.y) + getNumber(blockPos.position.height) / 2 + indentY1.value;
                }
                return indentY1.value;
            }),
            x2: computed(() => {
                const blockPos = blockToPos.value;
                if (isRectPositioning(blockPos?.position) && blockPos?.position.x) {
                    return getNumber(blockPos?.position.x) + (!isToRighter.value ? getNumber(blockPos.position.width) : 0) + indentX2.value;
                }
                return indentX2.value;
            }),
            y2: computed(() => {
                const blockPos = blockToPos.value;
                if (isRectPositioning(blockPos?.position) && blockPos?.position.y) {
                    return getNumber(blockPos?.position.y) + getNumber(blockPos.position.height) / 2 + indentY2.value;
                }
                return indentY2.value;
            })
        }
    };
}