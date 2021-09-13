import { computed, Ref, isRef, ref } from "@vue/reactivity";
import { blockGroupDescriptionsToBlock } from "./block/blockGroupDescriptionsToBlock";
import { ArchitectureDescription, TransformSetting } from "./descriptionTypes";
import { isArchitectureDescription } from "./typeGuards";
import { Architecture, Block, CurrentPhaseInfo } from "./types";
import { styleDescriptionToArchitectureStyle } from "./style/styleDescriptionToArchitectureStyle";
import { startPhases } from "./phase/startPhases";
import { buildPhasesIndex } from "./phase/buildPhasesIndex";
import { watch } from '@vue-reactivity/watch';
import { deepCopy } from "./util/deepCopy";
import { PhaseId } from ".";


export function transformToArchitecture(description: Ref<unknown> | unknown, setting: TransformSetting): Ref<Architecture> {
    const refDescription = isRef(description) ? description : ref(description);
    const value = refDescription.value;
    
    const transitionalArchitectureRef = ref(deepCopy(value));
    const transitionalArchitecture: ArchitectureDescription = transitionalArchitectureRef.value;
    transitionalArchitecture.blocks = {
        main: transitionalArchitecture.blocks
    };

    const architecture = computed<Architecture>(() => {
        if (isArchitectureDescription(transitionalArchitectureRef.value)) {
            return transformDescriptionToArchitecture(transitionalArchitectureRef, setting);
        }
        return {
            name: "",
            blocks: ref([]),
            style: ref(null),
            next: () => { },
            back: () => { },
        };
    });
    return architecture;
}

export function transformDescriptionToArchitecture(transitionalArchitectureRef: Ref<ArchitectureDescription>, setting: TransformSetting): Architecture {
    const oldValues: { arch: ArchitectureDescription, phaseId: PhaseId }[] = [];
    let enableWatcher = true;
    const currentPhase: CurrentPhaseInfo = {
        current: null
    };
    watch(() => deepCopy(transitionalArchitectureRef.value), (_, oldVal) => {
        if (enableWatcher) {
            oldValues.push({
                arch: oldVal,
                phaseId: currentPhase.current
            });
        }
    });
    const blocks = computed(() => BlockGroupDescriptionsToBlock(transitionalArchitectureRef.value))
    const phaseIndex = buildPhasesIndex(transitionalArchitectureRef.value.phases);
    return {
        name: transitionalArchitectureRef.value.name,
        blocks,
        style: computed(() => styleDescriptionToArchitectureStyle(transitionalArchitectureRef.value, blocks.value, setting)),
        next: () => {
            enableWatcher = true;
            const nextPhaseId = startPhases(transitionalArchitectureRef.value, phaseIndex, currentPhase);
            currentPhase.current = nextPhaseId;
        },
        back: () => {
            let val = oldValues.pop();
            while (oldValues.length > 0 && oldValues[oldValues.length - 1].phaseId == val?.phaseId) {
                val = oldValues.pop();
            }
            if (val) {
                enableWatcher = false;
                transitionalArchitectureRef.value = val.arch;
                currentPhase.current = val.phaseId;
            }
        }
    }
}

export function BlockGroupDescriptionsToBlock(description: ArchitectureDescription): Block[] {
    return blockGroupDescriptionsToBlock(description);
}