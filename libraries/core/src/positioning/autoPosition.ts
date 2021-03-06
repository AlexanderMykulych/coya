/* eslint-disable */
import type { Ref } from 'vue';
import { computed, ref } from 'vue';
import { isNotNullOrUndefined } from 'coya-util';
import type { BlockPositioning, Positioning } from '../types';
import { isContainerBlock, isLineBlockElement, isParentBlockElement, isRectPositioning } from '../typeGuards';
import type { AutoPositioningSetting, AutoPositioningSizeSetting } from './types';
import { lineBlockPosition } from './lineBlockPosition';
import { getNumber } from './getNumber';

export function autoPositioning(setting: AutoPositioningSetting): BlockPositioning[] | any {
    const sizeSetting = setting.sizeSetting ?? defaultSiseSettings;
    const blocks = setting.blocks;
    const blocksPositioning: Ref<BlockPositioning[]> = ref([]);
    blocksPositioning.value = blocks.map<BlockPositioning | any>((block) => {
        if (!isContainerBlock(block)) {
            if (isLineBlockElement(block))
                return lineBlockPosition(blocksPositioning, block, setting.setting);

            return null;
        }
        const parentBlockComp = computed(() => blocks.find(x => x.id === block.parentId));
        const parentPosComp = computed(() => parentBlockComp.value?.id ? getBlockPositioning(blocksPositioning.value, parentBlockComp.value.id) : null);
        const blockInParentIndexComp = computed(() => isParentBlockElement(parentBlockComp.value) ? parentBlockComp.value.children.indexOf(block) : -1);
        const columnIndexComp = computed(() => blockInParentIndexComp.value % sizeSetting.parentChildrenInRowCount);
        const rowIndexComp = computed(() => Math.floor(blockInParentIndexComp.value / sizeSetting.parentChildrenInRowCount));
        const brotherLeftBlockComp = computed(() => isParentBlockElement(parentBlockComp.value) ? parentBlockComp.value.children[blockInParentIndexComp.value - 1] : null);
        const brotherLeftPosComp = computed(() => brotherLeftBlockComp.value?.id ? getBlockPositioning(blocksPositioning.value, brotherLeftBlockComp.value?.id) : null);
        const x = computed(() => {
            if (block.parentId) {
                const parentBlock = parentBlockComp.value;
                const parentPos = parentPosComp.value;
                if (isParentBlockElement(parentBlock) && isRectPositioning(parentPos)) {
                    if (columnIndexComp.value === 0)
                        return getNumber(parentPos.x) + sizeSetting.gap;

                    const brotherPos = brotherLeftPosComp.value;
                    if (isRectPositioning(brotherPos))
                        return getNumber(brotherPos.x) + getNumber(brotherPos.w) + sizeSetting.gap;

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
                    if (rowIndexComp.value === 0)
                        return getNumber(parentPos.y) + sizeSetting.gap;

                    const previousRowIndex = rowIndexComp.value - 1;
                    const startIndex = previousRowIndex * sizeSetting.parentChildrenInRowCount;
                    let maxY = 0;
                    parentBlock
                        .children
                        .slice(startIndex, startIndex + sizeSetting.parentChildrenInRowCount)
                        .forEach((brotherBlock) => {
                            const pos = getBlockPositioning(blocksPositioning.value, brotherBlock.id);
                            if (isRectPositioning(pos)) {
                                const newY = getNumber(pos.y) + getNumber(pos.h);
                                if (newY > maxY)
                                    maxY = newY;
                            }
                        });
                    return maxY + sizeSetting.gap;
                }
            }
            return sizeSetting.gap;
        });
        const w = computed(() => {
            if (isParentBlockElement(block)) {
                let maxX = 0;
                block.children.forEach((child) => {
                    const pos = blocksPositioning.value.find(x => x.blockId === child.id)?.position;
                    if (isRectPositioning(pos)) {
                        const newX = getNumber(pos.x) + getNumber(pos.w);
                        if (newX > maxX)
                            maxX = newX;
                    }
                });

                return maxX - x.value + sizeSetting.gap;
            }
            return sizeSetting.rectWidth;
        });
        const h = computed(() => {
            if (isParentBlockElement(block)) {
                let maxY = 0;
                block.children.forEach((child) => {
                    const pos = blocksPositioning.value.find(x => x.blockId === child.id)?.position;
                    if (isRectPositioning(pos)) {
                        const newY = getNumber(pos.y) + getNumber(pos.h);
                        if (newY > maxY)
                            maxY = newY;
                    }
                });

                return maxY - y.value + sizeSetting.gap;
            }
            return sizeSetting.rectHeight;
        });

        return {
            blockId: block.id,
            position: { x, y, w, h },
        };
    }).filter(isNotNullOrUndefined);
    return blocksPositioning.value;
}

const defaultSiseSettings: AutoPositioningSizeSetting = {
    rectHeight: 20,
    rectWidth: 30,
    gap: 10,
    parentChildrenInRowCount: 3,
};

function getBlockPositioning(blocksPositioning: BlockPositioning[], id: string): Positioning | undefined {
    return blocksPositioning.find(x => x.blockId === id)?.position;
}
