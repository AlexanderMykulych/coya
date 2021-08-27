import { AutoPositioningSetting, AutoPositioningSizeSetting } from "./types";
import { computed, isRef } from "@vue/reactivity";
import { BlockPositioning, NumberValue } from "../types";
import { isNotNullOrUndefined, isParentBlockElement, isRectPositioning } from "../typeGuards";

export function autoPositioning(setting: AutoPositioningSetting): BlockPositioning[] {
    const sizeSetting = setting.sizeSetting ?? defaultSiseSettings;
    const blocks = setting.blocks;

    const blocksPositioning: BlockPositioning[] = blocks.map<BlockPositioning | null>(block => {
        return {
            blockId: block.id,
            position: {
                x: computed(() => {
                    const parentPositioning = blocksPositioning.find(x => x.blockId === block.parentId)?.position;
                    if (isRectPositioning(parentPositioning)) {
                        const parentBlock = blocks.find(x => x.id === block.parentId);
                        if (isParentBlockElement(parentBlock)) {
                            const parentX = parentPositioning.x;
                            const brotherBlockIndex = parentBlock.children.indexOf(block) - 1;
                            const leftBrotherBlockId = brotherBlockIndex >= 0 ? parentBlock
                                .children[brotherBlockIndex].id : null;
                            let leftBrotherWidthSum = 0;
                            if (leftBrotherBlockId) {
                                const brotherPos = blocksPositioning.find(x => x.blockId === leftBrotherBlockId)?.position;
                                if (isRectPositioning(brotherPos)) {
                                    leftBrotherWidthSum = getNumber(brotherPos.x) + getNumber(brotherPos.width);
                                }
                            }
                            return getNumber(parentX) + leftBrotherWidthSum + sizeSetting.gap;
                        }
                    }
                    return 10;
                }),
                y: 10,
                width: computed(() => {
                    if (isParentBlockElement(block)) {
                        let maxX = 0;
                        block.children.forEach(child => {
                            const pos = blocksPositioning.find(x => x.blockId === child.id)?.position;
                            if (isRectPositioning(pos)) {
                                const newX = getNumber(pos.x) + getNumber(pos.width);
                                if (newX > maxX) {
                                    maxX = newX;
                                }
                            }
                        })
                        
                        return maxX + sizeSetting.gap;
                    }
                    return sizeSetting.rectWidth;
                }),
                height: computed(() => {
                    if (isParentBlockElement(block)) {
                        const rowCount = Math.round(block.children.length / sizeSetting.parentChildrenInRowCount);
                        const gapHeight = (rowCount - 1) * sizeSetting.gap;
                        return rowCount * sizeSetting.rectHeight + gapHeight;
                    }
                    return sizeSetting.rectHeight;
                })
            }
        };
    }).filter(isNotNullOrUndefined);
    return blocksPositioning;
};


const defaultSiseSettings: AutoPositioningSizeSetting = {
    rectHeight: 50,
    rectWidth: 70,
    gap: 5,
    parentChildrenInRowCount: 3
}

function getNumber(obj: NumberValue) {
    return isRef(obj) ? obj.value : <number>obj;
}