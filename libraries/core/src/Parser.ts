import { computed, Ref, isRef, ref } from "@vue/reactivity";
import { blockGroupDescriptionsToBlock } from "./block/blockGroupDescriptionsToBlock";
import { ArchitectureDescription, BlockGroupDescriptions } from "./descriptionTypes";
import { isArchitectureDescription } from "./typeGuards";
import { Architecture, Block } from "./types";
import { styleDescriptionToArchitectureStyle } from "./style/styleDescriptionToArchitectureStyle";

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
        style: styleDescriptionToArchitectureStyle(architectureDescription.style, blocks)
    }
}

export function BlockGroupDescriptionsToBlock(description: BlockGroupDescriptions): Block[] {
    return blockGroupDescriptionsToBlock({ main: description });
}


