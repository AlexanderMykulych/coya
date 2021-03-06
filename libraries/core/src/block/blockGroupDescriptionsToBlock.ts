/* eslint-disable */
import { isNotNullOrUndefined, isNullOrUndefined } from 'coya-util';
import { DebugType } from '../debugTypes';
import type { ArchitectureDescription, BlockGroupDescriptions } from '../descriptionTypes';
import { isBlockElementDescription, isContainerBlock, isLineBlockElementDescription, isString } from '../typeGuards';
import type { Block } from '../types';
import { createBlockElementByDescription, createBlockElementByString, getDefaultEnter } from './createBlockElementByString';
import { createLineElementByDescription } from './createLineElementByDescription';

export function blockGroupDescriptionsToBlock(architecture: ArchitectureDescription): Block[] {
    const description = architecture.blocks;
    const blockGroupDescriptionsToBlockWorker = (description: BlockGroupDescriptions): Block[] => {
        const blocks = Object.keys(description)
            .flatMap<Block | undefined>((key) => {
            const value = description[key];
            if (isNullOrUndefined(value))
                return;

            const blockStyle = architecture.style?.blocks?.[key];
            if (isString(value))
                return createBlockElementByString(key, value, blockStyle);

            if (isBlockElementDescription(value)) {
                if (isLineBlockElementDescription(value))
                    return createLineElementByDescription(key, value, blockStyle);

                return createBlockElementByDescription(key, value, blockStyle);
            }
            if (value === null)
                return createBlockElementByString(key, key, blockStyle);

            const items = blockGroupDescriptionsToBlockWorker(value);
            items.forEach(x => isContainerBlock(x) ? x.parentId = x.parentId ?? key : null);
            return [
                {
                    id: key,
                    label: key,
                    children: items.filter(x => isContainerBlock(x) && x.parentId === key),
                    enter: getDefaultEnter(),
                },
                ...items,
            ];
        })
            .filter(isNotNullOrUndefined)
            .map((block) => {
                if (architecture.debugState
                    && architecture.debugState.selectedBlocks
                    && architecture.debugState.selectedBlocks.includes(block.id)) {
                    block.debug = {
                        type: DebugType.Select,
                    };
                }
                return block;
            });
        return blocks;
    };
    return blockGroupDescriptionsToBlockWorker(description);
}
