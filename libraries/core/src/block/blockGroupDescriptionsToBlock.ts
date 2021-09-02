import { BlockGroupDescriptions } from "../descriptionTypes";
import { isBlockElementDescription, isLineBlockElementDescription, isContainerBlock, isString } from "../typeGuards";
import { Block } from "../types";
import { createBlockElementByString, createBlockElementByDescription } from "./createBlockElementByString";
import { createLineElementByDescription } from "./createLineElementByDescription";

export function blockGroupDescriptionsToBlock(description: BlockGroupDescriptions): Block[] {
    const blocks = Object.keys(description)
        .flatMap<Block>(key => {
            const value = description[key];
            if (isString(value)) {
                return createBlockElementByString(key, value);
            }
            if (isBlockElementDescription(value)) {
                if (isLineBlockElementDescription(value)) {
                    return createLineElementByDescription(key, value);
                }
                return createBlockElementByDescription(key, value);
            }
            if (value === null) {
                return createBlockElementByString(key, key);
            }
            const items = blockGroupDescriptionsToBlock(value);
            items.forEach(x => isContainerBlock(x) ? x.parentId = x.parentId ?? key : null);
            return [
                {
                    id: key,
                    label: key,
                    children: items.filter(x => isContainerBlock(x) && x.parentId === key )
                },
                ...items
            ];
        });
    return blocks;
}