import { computed, Ref, isRef, ref } from "@vue/reactivity";
import { blockGroupDescriptionsToBlock } from "./block/blockGroupDescriptionsToBlock";
import { ArchitectureDescription, BlockGroupDescriptions } from "./descriptionTypes";
import { isArchitectureDescription } from "./typeGuards";
import { Architecture, Block, CurrentPhaseInfo } from "./types";
import { styleDescriptionToArchitectureStyle } from "./style/styleDescriptionToArchitectureStyle";
import { startPhases } from "./phase/startPhases";
import { buildPhasesIndex } from "./phase/buildPhasesIndex";


export function transformToArchitecture(description: Ref<unknown> | unknown): Ref<Architecture> {
    const refDescription = isRef(description) ? description : ref(description);
    const value = refDescription.value;
    
    const transitionalArchitectureRef = ref(JSON.parse(JSON.stringify(value)));
    const transitionalArchitecture: ArchitectureDescription = transitionalArchitectureRef.value;
    transitionalArchitecture.blocks = {
        main: transitionalArchitecture.blocks
    };
    const architecture = computed<Architecture>(() => {
        if (isArchitectureDescription(transitionalArchitecture)) {
            return transformDescriptionToArchitecture(transitionalArchitecture);
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
    const currentPhase: CurrentPhaseInfo = {
        current: null
    };
    const phaseIndex = buildPhasesIndex(architectureDescription.phases);
    return {
        blocks,
        style: computed(() => styleDescriptionToArchitectureStyle(architectureDescription, blocks.value)),
        start: () => {
            const nextPhaseId = startPhases(architectureDescription, phaseIndex, currentPhase);
            currentPhase.current = nextPhaseId;
        }
    }
}

export function BlockGroupDescriptionsToBlock(description: BlockGroupDescriptions): Block[] {
    return blockGroupDescriptionsToBlock(description);
}


