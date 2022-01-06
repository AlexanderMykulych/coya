import { isNotNullOrUndefined } from "coya-util";
import { computed, Ref, ref } from "vue";
import { FormulaValue } from "../descriptionTypes";
import { isContainerBlock, isFormulaValue, isLineBlockElement } from "../typeGuards";
import { BlockPositioning } from "../types";
import { getFormulaValue } from "./getFormulaValue";
import { lineBlockPosition } from "./lineBlockPosition";
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
    const getValueByCtx = (x?: number | FormulaValue, multiplier: number = 1) => {
        const res = getFormulaValue(x, blocksPositioning, option.setting);
        if (isFormulaValue(x)) {
            return res;
        }
        return ref(res.value * multiplier);
    };
    blocksPositioning.value = blocks.map<BlockPositioning | null>(block => {
        const blockStyle = style[block.id];
        if (!isContainerBlock(block)) {
            if (isLineBlockElement(block)) {
                return lineBlockPosition(blocksPositioning, block, option.setting, blockStyle);
            }
            return null;
        }
        if (blockStyle.position) {
            const pos = blockStyle.position;
            
            const indentX = (getValueByCtx(pos.indentX) ?? ref(0));
            const indentY = (getValueByCtx(pos.indentY) ?? ref(0));
            
            const pinTo = blockStyle.pinTo;
            let pinToBlockPos = {
                x: ref(0),
                y: ref(0),
            };
            if (pinTo) {
                pinToBlockPos = {
                    x: computed(() => blocksPositioning.value.find(x => x.blockId === pinTo)?.position?.x ?? 0),
                    y: computed(() => blocksPositioning.value.find(x => x.blockId === pinTo)?.position?.y ?? 0),
                };
            }
            const blockId = block.id;
            return <BlockPositioning>{
                blockId: blockId,
                position: {
                    x: computed(() => getValueByCtx(pos.x, gridSize.columnWidth).value + indentX.value + pinToBlockPos.x.value),
                    y: computed(() => getValueByCtx(pos.y, gridSize.rowHeight).value + indentY.value + pinToBlockPos.y.value),
                    w: computed(() => getValueByCtx(pos.w, gridSize.columnWidth).value + indentX.value),
                    h: computed(() => getValueByCtx(pos.h, gridSize.rowHeight).value + indentY.value),
                    top: {
                        x: computed(() => getValueByCtx(pos.top?.x ?? `${blockId}.x + ${blockId}.w / 2`, gridSize.columnWidth).value),
                        y: computed(() => getValueByCtx(pos.top?.y ?? `${blockId}.y`, gridSize.columnWidth).value),
                        w: 0,
                        h: 0,
                    },
                    bottom: {
                        x: computed(() => getValueByCtx(pos.top?.x ?? `${blockId}.top.x`, gridSize.columnWidth).value),
                        y: computed(() => getValueByCtx(pos.top?.y ?? `${blockId}.y + ${blockId}.h`, gridSize.columnWidth).value),
                        w: 0,
                        h: 0,
                    },
                    right: {
                        x: computed(() => getValueByCtx(pos.top?.x ?? `${blockId}.x + ${blockId}.w`, gridSize.columnWidth).value),
                        y: computed(() => getValueByCtx(pos.top?.y ?? `${blockId}.y + ${blockId}.h / 2`, gridSize.columnWidth).value),
                        w: 0,
                        h: 0,
                    },
                    left: {
                        x: computed(() => getValueByCtx(pos.top?.x ?? `${blockId}.x`, gridSize.columnWidth).value),
                        y: computed(() => getValueByCtx(pos.top?.y ?? `${blockId}.right.y`, gridSize.columnWidth).value),
                        w: 0,
                        h: 0,
                    }
                }
            };
        }
        return null;
    }).filter(isNotNullOrUndefined);
    return blocksPositioning.value;
}

