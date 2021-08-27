import { computed, Ref, isRef, ref } from "@vue/reactivity";
import { ArchitectureDescription, BlockElementDescription, BlockGroupDescriptions } from "./descriptionTypes";
import { autoPositioning } from "./positioning/autoPosition";
import { isArchitectureDescription, isBlockElementDescription, isString } from "./typeGuards";
import { Architecture, Block, BlockElement } from "./types";

export function transformToArchitecture(description: Ref<unknown> | unknown): Ref<Architecture> {
    const refDescription = isRef(description) ? description : ref(description);
    return computed(() => {
        const value = refDescription.value;
        if (isArchitectureDescription(value)) {
            return transformDescriptionToArchitecture(value);
        }
        return {
            blocks: [],
            animations: [],
            phases: [],
            style: null
        };
    });
}

export function transformDescriptionToArchitecture(architectureDescription: ArchitectureDescription): Architecture {
    const blocks = BlockGroupDescriptionsToBlock(architectureDescription.blocks)
    return {
        blocks,
        phases: [],
        animations: [],
        style: {
            id: "style",
            positioning: autoPositioning({
                blocks
            })
        }
    }
}

export function BlockGroupDescriptionsToBlock(description: BlockGroupDescriptions): Block[] {
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
            const items = BlockGroupDescriptionsToBlock(value);
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

export function createBlockElementByString(id: string, label: string): BlockElement {
    return {
        id,
        label
    };
}

function createBlockElementByDescription(id: string, { label }: BlockElementDescription): any {
    return createBlockElementByString(id, label ?? id);
}
