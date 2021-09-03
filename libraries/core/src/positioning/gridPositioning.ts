import { computed, Ref, ref } from "@vue/reactivity";
import { isContainerBlock, isLineBlockElement, isNotNullOrUndefined } from "../typeGuards";
import { BlockPositioning } from "../types";
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
                .style?.[block.id];
            return !styleBlock || !styleBlock.position;
        })
    const style = option.architectureDescription.style;
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
            const indentX = (pos.indentX ?? 0);
            const indentY = (pos.indentY ?? 0);
            return <BlockPositioning>{
                blockId: block.id,
                position: {
                    x: computed(() => pos.x * gridSize.columnWidth + indentX),
                    y: computed(() => pos.y * gridSize.rowHeight + indentY),
                    width: computed(() => pos.w * gridSize.columnWidth + indentX),
                    height: computed(() => pos.h * gridSize.rowHeight + indentY)
                }
            };
        }
        return null;
    }).filter(isNotNullOrUndefined);
    return blocksPositioning.value;
}