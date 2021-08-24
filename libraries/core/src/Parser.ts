import { ArchitectureDescription, BlockElementDescription, BlockGroupDescriptions } from "./descriptionTypes";
import { isBlockElementDescription, isString } from "./typeGuards";
import { Architecture, Block, BlockElement } from "./types";


export function transformDescriptionToArchitecture(architectureDescription: ArchitectureDescription): Architecture {
    return {
        blocks: BlockGroupDescriptionsToBlock(architectureDescription.blocks),
        phases: [],
        animations: [],
        style: {
            id: "style"
        }
    }
}

export function BlockGroupDescriptionsToBlock(description: BlockGroupDescriptions, id?: string): Block[] {
    const blocks = Object.keys(description)
        .map<Block>(key => {
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
            return BlockGroupDescriptionsToBlock(value, key);
        });
    return id ? [{
        id,
        label: id,
        items: blocks
    }] : blocks;
}

export function createBlockElementByString(id: string, label: string): BlockElement {
    return {
        id,
        label
    };
}

function createBlockElementByDescription(id: string, {label}: BlockElementDescription): any {
    return createBlockElementByString(id, label ?? id);
}
