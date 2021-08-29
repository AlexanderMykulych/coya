import { BlockGroupDescriptions } from "../descriptionTypes";
import { isBlockElementDescription, isString } from "../typeGuards";
import { Block } from "../types";
import { createBlockElementByString, createBlockElementByDescription } from "./createBlockElementByString";

export function blockGroupDescriptionsToBlock(description: BlockGroupDescriptions): Block[] {
    const blocks = Object.keys(description)
        .flatMap<Block>(key => {
            const value = description[key];
            if (isString(value)) {
                return createBlockElementByString(key, value);
            }
            if (isBlockElementDescription(value)) {
                return createBlockElementByDescription(key, value);
            }
            if (value === null) {
                return createBlockElementByString(key, key);
            }
            const items = blockGroupDescriptionsToBlock(value);
            items.forEach(x => x.parentId = x.parentId ?? key);
            return [
                {
                    id: key,
                    label: key,
                    children: items.filter(x => x.parentId === key)
                },
                ...items
            ];
        });
    return blocks;
}
