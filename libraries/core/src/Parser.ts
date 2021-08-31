import { computed, Ref, isRef, ref } from "@vue/reactivity";
import { blockGroupDescriptionsToBlock } from "./block/blockGroupDescriptionsToBlock";
import { ArchitectureDescription, BlockGroupDescriptions } from "./descriptionTypes";
import { isArchitectureDescription } from "./typeGuards";
import { Architecture, Block } from "./types";
import { styleDescriptionToArchitectureStyle } from "./style/styleDescriptionToArchitectureStyle";


export function transformToArchitecture(description: Ref<unknown> | unknown): Ref<Architecture> {
    const refDescription = isRef(description) ? description : ref(description);
    const value = refDescription.value;
    
    const transitionalArchitecture = ref(JSON.parse(JSON.stringify(value)));
    const architecture = computed<Architecture>(() => {
        if (isArchitectureDescription(transitionalArchitecture.value)) {
            return transformDescriptionToArchitecture(transitionalArchitecture.value);
        }
        return {
            blocks: ref([]),
            style: ref(null),
            start: () => {}
        };
    });
    return architecture;
}

export function transformDescriptionToArchitecture(architectureDescription: ArchitectureDescription): Architecture {
    const blocks = computed(() => BlockGroupDescriptionsToBlock(architectureDescription.blocks))
    return {
        blocks,
        style: computed(() => styleDescriptionToArchitectureStyle(architectureDescription.style, blocks.value)),
        start: () => {
            console.log("start");
        }
    }
}

export function BlockGroupDescriptionsToBlock(description: BlockGroupDescriptions): Block[] {
    return blockGroupDescriptionsToBlock({ main: description });
}

