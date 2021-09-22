import { computed, Ref, isRef, ref, reactive } from "@vue/reactivity";
import { blockGroupDescriptionsToBlock } from "./block/blockGroupDescriptionsToBlock";
import { ArchitectureDescription, TransformSetting } from "./descriptionTypes";
import { isArchitectureDescription } from "./typeGuards";
import { PhaseId, SelectedProperties, Architecture, Block, CurrentPhaseInfo, DebugStateContainer } from "./types";
import { styleDescriptionToArchitectureStyle } from "./style/styleDescriptionToArchitectureStyle";
import { startPhases } from "./phase/startPhases";
import { buildPhasesIndex } from "./phase/buildPhasesIndex";
import { watch } from '@vue-reactivity/watch';
import { deepCopy } from "./util/deepCopy";


export function transformToArchitecture(description: Ref<unknown> | unknown, setting: TransformSetting): Ref<Architecture> {
    const refDescription = isRef(description) ? description : ref(description);
    const value = refDescription.value;

    const transitionalArchitectureRef = ref(deepCopy(value));
    const transitionalArchitecture: ArchitectureDescription = transitionalArchitectureRef.value;
    transitionalArchitecture.blocks = {
        main: transitionalArchitecture.blocks
    };
    transitionalArchitectureRef.value.debugState = <DebugStateContainer>{
        selected: null
    };

    const architecture = computed<Architecture>(() => {
        if (isArchitectureDescription(transitionalArchitectureRef.value)) {
            return transformDescriptionToArchitecture(transitionalArchitectureRef, setting);
        }
        return {
            name: "",
            blocks: ref([]),
            style: ref(null),
            phases: [],
            currentPhase: null,
            next: () => null,
            back: () => null,
            debugSelect: () => {},
            toPhase: () => {}
        };
    });
    return architecture;
}

export function transformDescriptionToArchitecture(transitionalArchitectureRef: Ref<ArchitectureDescription>, setting: TransformSetting): Architecture {
    const oldValues: { arch: ArchitectureDescription, phaseId: PhaseId }[] = [];
    let enableWatcher = true;
    const currentPhase: CurrentPhaseInfo = reactive({
        current: null
    });
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
    const next = () => {
        enableWatcher = true;
        const nextPhaseId = startPhases(transitionalArchitectureRef.value, phaseIndex, currentPhase);
        currentPhase.current = nextPhaseId;
        return nextPhaseId;
    };
    const back = () => {
        let val = oldValues.pop();
        while (oldValues.length > 0 && oldValues[oldValues.length - 1].phaseId == val?.phaseId) {
            val = oldValues.pop();
        }
        if (val) {
            enableWatcher = false;
            transitionalArchitectureRef.value = val.arch;
            currentPhase.current = val.phaseId;
        }
        return val?.phaseId;
    };
    return {
        name: transitionalArchitectureRef.value.name,
        blocks,
        style: computed(() => styleDescriptionToArchitectureStyle(transitionalArchitectureRef.value, blocks.value, setting)),
        next,
        back,
        toPhase: (phaseId: string) => {
            const phaseInd = phaseIndex.getPhaseIndex(phaseId);
            const currentPhaseInd = phaseIndex.getPhaseIndex(currentPhase.current);
            const walkerFn = phaseInd > currentPhaseInd ? next : back;
            let curPhaseId = null;
            do {
                curPhaseId = walkerFn();
            } while (!!curPhaseId && curPhaseId.length > 0 && curPhaseId.indexOf(phaseId) === -1);
        },
        debugSelect: (selected: SelectedProperties) => {
            transitionalArchitectureRef.value.debugState!.selected = selected
        },
        phases: phaseIndex.phases,
        currentPhase: computed(() => currentPhase.current)
    }
}

export function BlockGroupDescriptionsToBlock(description: ArchitectureDescription): Block[] {
    return blockGroupDescriptionsToBlock(description);
}