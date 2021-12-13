import { BlockPositioning, LineBlockElement } from "../types";
import { computed, Ref } from "vue";
import { isRectPositioning } from "../typeGuards";
import { getNumber } from "./getNumber";
import { BlockStyle, FormulaValue } from "../descriptionTypes";
import { getFormulaValue } from "./getFormulaValue";
import { TransformSetting } from "..";

export function lineBlockPosition(blocksPositions: Ref<BlockPositioning[]>, block: LineBlockElement,
    setting: TransformSetting, blockStyle?: BlockStyle): BlockPositioning {
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
    const getValueByCtx = (x?: number | FormulaValue) => getFormulaValue(x, blocksPositions, setting);
    const indentX1 = getValueByCtx(blockStyle?.position?.indentX1 ?? blockStyle?.position?.indentX);
    const indentX2 = getValueByCtx(blockStyle?.position?.indentX2 ?? blockStyle?.position?.indentX);
    const indentY1 = getValueByCtx(blockStyle?.position?.indentY1 ?? blockStyle?.position?.indentY);
    const indentY2 = getValueByCtx(blockStyle?.position?.indentY2 ?? blockStyle?.position?.indentY);


    if (!blockStyle?.position) {
        const fromPoints = `${block.from}.top, ${block.from}.bottom, ${block.from}.right, ${block.from}.left`;
        const toPoints = `${block.to}.top, ${block.to}.bottom, ${block.to}.right, ${block.to}.left`;
        const closesPoints = `_.fn.findClosestPoints([${fromPoints}], [${toPoints}])`;
        const position = getValueByCtx(closesPoints);
        return {
            blockId: block.id,
            position: {
                x1: computed(() => position.value.p1?.x + (indentX1.value ?? 2)),
                y1: computed(() => position.value.p1?.y + (indentY1.value ?? 2)),
                x2: computed(() => position.value.p2?.x + (indentX2.value ?? -2)),
                y2: computed(() => position.value.p2?.y + (indentY2.value ?? -2))
            }
        };
    }
    const x1 = blockStyle?.position?.x1 ? getValueByCtx(blockStyle?.position?.x1) : computed(() => {
        const blockPos = blockFromPos.value;
        if (isRectPositioning(blockPos?.position) && blockPos?.position.x) {
            return getNumber(blockPos.position.x) + (!isToRighter.value ? 0 : getNumber(blockPos.position.w)) + indentX1.value;
        }
        return indentX1.value;
    });
    const y1 = blockStyle?.position?.y1 ? getValueByCtx(blockStyle?.position?.y1) : computed(() => {
        const blockPos = blockFromPos.value;
        if (isRectPositioning(blockPos?.position) && blockPos?.position.y) {
            return getNumber(blockPos?.position.y) + getNumber(blockPos.position.h) / 2 + indentY1.value;
        }
        return indentY1.value;
    });
    const x2 = blockStyle?.position?.x2 ? getValueByCtx(blockStyle?.position?.x2) : computed(() => {
        const blockPos = blockToPos.value;
        if (isRectPositioning(blockPos?.position) && blockPos?.position.x) {
            return getNumber(blockPos?.position.x) + (!isToRighter.value ? getNumber(blockPos.position.w) : 0) + indentX2.value;
        }
        return indentX2.value;
    });
    const y2 = blockStyle?.position?.y2 ? getValueByCtx(blockStyle?.position?.y2) : computed(() => {
        const blockPos = blockToPos.value;
        if (isRectPositioning(blockPos?.position) && blockPos?.position.y) {
            return getNumber(blockPos?.position.y) + getNumber(blockPos.position.h) / 2 + indentY2.value;
        }
        return indentY2.value;
    });
    return {
        blockId: block.id,
        position: {
            x1,
            y1,
            x2,
            y2
        }
    };
}