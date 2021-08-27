import { AutoPositioningSetting, AutoPositioningSizeSetting } from "./types";
import { computed, isRef } from "@vue/reactivity";
import { BlockPositioning, NumberValue } from "../types";
import { isNotNullOrUndefined, isParentBlockElement, isRectPositioning } from "../typeGuards";

export function autoPositioning(setting: AutoPositioningSetting): BlockPositioning[] {
    const sizeSetting = setting.sizeSetting ?? defaultSiseSettings;
    const blocks = setting.blocks;

    const blocksPositioning: BlockPositioning[] = blocks.map<BlockPositioning | null>(block => {
        const parentBlockComp = computed(() => blocks.find(x => x.id === block.parentId));
        const parentPosComp = computed(() => parentBlockComp.value?.id ? getBlockPositioning(blocksPositioning, parentBlockComp.value.id) : null);
        const blockInParentIndexComp = computed(() => isParentBlockElement(parentBlockComp.value) ? parentBlockComp.value.children.indexOf(block) : -1);
        const columnIndexComp = computed(() => blockInParentIndexComp.value % sizeSetting.parentChildrenInRowCount);
        const rowIndexComp = computed(() => Math.ceil(blockInParentIndexComp.value / sizeSetting.parentChildrenInRowCount));
        const brotherLeftBlockComp = computed(() => isParentBlockElement(parentBlockComp.value) ? parentBlockComp.value.children[blockInParentIndexComp.value - 1] : null);
        const brotherPosComp = computed(() => brotherLeftBlockComp.value?.id ? getBlockPositioning(blocksPositioning, brotherLeftBlockComp.value?.id) : null);

        const x = computed(() => {
            if (block.parentId) {
                const parentBlock = parentBlockComp.value;
                const parentPos = parentPosComp.value;
                if (isParentBlockElement(parentBlock) && isRectPositioning(parentPos)) {
                    if (columnIndexComp.value === 0) {
                        return getNumber(parentPos.x) + sizeSetting.gap;
                    }
                    const brotherPos = brotherPosComp.value;
                    if (isRectPositioning(brotherPos)) {
                        return getNumber(brotherPos.x) + getNumber(brotherPos.width) + sizeSetting.gap;
                    }
                    return getNumber(parentPos.x) + sizeSetting.gap;
                }
            }
            return sizeSetting.gap;
        });
        const y = computed(() => {
            if (block.parentId) {
                const parentBlock = parentBlockComp.value;
                const parentPos = parentPosComp.value;
                if (isParentBlockElement(parentBlock) && isRectPositioning(parentPos)) {
                    if (rowIndexComp.value === 0) {
                        return getNumber(parentPos.y) + sizeSetting.gap;
                    }
                    const brotherPos = brotherPosComp.value;
                    if (isRectPositioning(brotherPos)) {
                        if (columnIndexComp.value === 0) {
                            return getNumber(brotherPos.y) + getNumber(brotherPos.height) + sizeSetting.gap;
                        }
                        return getNumber(brotherPos.y);
                    }
                    return getNumber(parentPos.y) + sizeSetting.gap;
                }
            }
            return sizeSetting.gap;
        });
        const width = computed(() => {
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

                return maxX - x.value + sizeSetting.gap;
            }
            return sizeSetting.rectWidth;
        });
        const height = computed(() => {
            if (isParentBlockElement(block)) {
                let maxY = 0;
                block.children.forEach(child => {
                    const pos = blocksPositioning.find(x => x.blockId === child.id)?.position;
                    if (isRectPositioning(pos)) {
                        const newY = getNumber(pos.y) + getNumber(pos.height);
                        if (newY > maxY) {
                            maxY = newY;
                        }
                    }
                })

                return maxY - y.value + sizeSetting.gap;
            }
            return sizeSetting.rectHeight;
        });

        return {
            blockId: block.id,
            position: { x, y, width, height }
        };
    }).filter(isNotNullOrUndefined);
    return blocksPositioning;
};


const defaultSiseSettings: AutoPositioningSizeSetting = {
    rectHeight: 20,
    rectWidth: 30,
    gap: 10,
    parentChildrenInRowCount: 3
}

function getNumber(obj: NumberValue) {
    return isRef(obj) ? obj.value : <number>obj;
}

function getBlockPositioning(blocksPositioning: BlockPositioning[], id: string) {
    return blocksPositioning.find(x => x.blockId === id)?.position;
}