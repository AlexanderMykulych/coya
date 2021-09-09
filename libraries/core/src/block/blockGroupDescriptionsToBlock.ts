import { ArchitectureDescription, BlockGroupDescriptions } from "../descriptionTypes";
import { isBlockElementDescription, isLineBlockElementDescription, isContainerBlock, isString } from "../typeGuards";
import { Block } from "../types";
import { createBlockElementByString, createBlockElementByDescription, getDefaultEnter } from "./createBlockElementByString";
import { createLineElementByDescription } from "./createLineElementByDescription";

export function blockGroupDescriptionsToBlock(architecture: ArchitectureDescription): Block[] {
    const description = architecture.blocks;
    const blockGroupDescriptionsToBlock2 = (description: BlockGroupDescriptions): Block[] => {
        const blocks = Object.keys(description)
            .flatMap<Block>(key => {
                const value = description[key];
                const blockStyle = architecture.style?.blocks?.[key];
                if (isString(value)) {
                    return createBlockElementByString(key, value, blockStyle);
                }
                if (isBlockElementDescription(value)) {
                    if (isLineBlockElementDescription(value)) {
                        return createLineElementByDescription(key, value, blockStyle);
                    }
                    return createBlockElementByDescription(key, value, blockStyle);
                }
                if (value === null) {
                    return createBlockElementByString(key, key, blockStyle);
                }
                const items = blockGroupDescriptionsToBlock2(value);
                items.forEach(x => isContainerBlock(x) ? x.parentId = x.parentId ?? key : null);
                return [
                    {
                        id: key,
                        label: key,
                        children: items.filter(x => isContainerBlock(x) && x.parentId === key),
                        enter: getDefaultEnter()
                    },
                    ...items
                ];
            });
        return blocks;
    }
    return blockGroupDescriptionsToBlock2(description,);
}
