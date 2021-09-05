import { computed, Ref, ref } from "@vue/reactivity";
import { FormulaValue } from "../descriptionTypes";
import { isContainerBlock, isLineBlockElement, isNotNullOrUndefined } from "../typeGuards";
import { BlockPositioning } from "../types";
import { getFormulaValue } from "./getFormulaValue";
import { lineBlockPosition } from "./relativeBlockPosition";
import { AutoPositioningSetting } from "./types";

export function gridPositioning(option: AutoPositioningSetting): BlockPositioning[] {
    const blocks = option.blocks.filter(x => x.id !== "main");
    const notSettetBlocks = blocks
        .filter(block => {
            if (isLineBlockElement(block)) {
                return false;
            }
            const styleBlock = option
                .architectureDescription
                .style?.blocks?.[block.id];
            return !styleBlock || !styleBlock.position;
        })
    const style = option.architectureDescription.style?.blocks;
    if (!style || notSettetBlocks.length > 0) {
        throw `Not every block has setting: [${notSettetBlocks.map(x => x.id)}]`;
    }
    const gridSize = {
        columnWidth: 20,
        rowHeight: 20
    };

    const blocksPositioning: Ref<BlockPositioning[]> = ref([]);
    blocksPositioning.value = blocks.map<BlockPositioning | null>(block => {
        const blockStyle = style[block.id];
        if (!isContainerBlock(block)) {
            if (isLineBlockElement(block)) {
                return lineBlockPosition(blocksPositioning, block, blockStyle);
            }
            return null;
        }
        if (blockStyle.position) {
            const pos = blockStyle.position;
            
            const getValueByCtx = (x?: number | FormulaValue) => getFormulaValue(x, blocksPositioning);
            const indentX = (getValueByCtx(pos.indentX) ?? 0);
            const indentY = (getValueByCtx(pos.indentY) ?? 0);
            return <BlockPositioning>{
                blockId: block.id,
                position: {
                    x: computed(() => getValueByCtx(pos.x).value * gridSize.columnWidth + indentX.value),
                    y: computed(() => getValueByCtx(pos.y).value * gridSize.rowHeight + indentY.value),
                    width: computed(() => getValueByCtx(pos.w).value * gridSize.columnWidth + indentX.value),
                    height: computed(() => getValueByCtx(pos.h).value * gridSize.rowHeight + indentY.value)
                }
            };
        }
        return null;
    }).filter(isNotNullOrUndefined);
    return blocksPositioning.value;
}

