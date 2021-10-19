import { blockGroupDescriptionsToBlock } from "./block/blockGroupDescriptionsToBlock";
import { ArchitectureDescription, TransformSetting } from "./descriptionTypes";
import { isArchitectureDescription, isNotNullOrUndefined } from "./typeGuards";
import { PhaseId, SelectedProperties, Architecture, Block, CurrentPhaseInfo, DebugStateContainer, DebugSelectContext, TransformationResult } from "./types";
import { styleDescriptionToArchitectureStyle } from "./style/styleDescriptionToArchitectureStyle";
import { startPhases } from "./phase/startPhases";
import { buildPhasesIndex } from "./phase/buildPhasesIndex";
import { watch, computed, Ref, isRef, ref, reactive, unref } from 'vue';
import { deepCopy } from "./util/deepCopy";
import { getDebugActions } from "./debug/getDebugActions";
import { DebugType } from "./debugTypes";

export function transformToArchitecture(description: Ref<unknown> | unknown, setting: TransformSetting): TransformationResult {
    const refDescription = isRef(description) ? description : ref(description);
    const value = refDescription.value;
    watch(() => unref(setting.viewBox.h), (h: any) => {
        console.log("newHeight:", h);
    }, {immediate: true})
    const transitionalArchitectureRef = ref(deepCopy(value));
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
            debugSelect: () => { },
            toPhase: () => { }
        };
    });
    return {
        architecture,
        config: transitionalArchitectureRef
    };
}

export function transformDescriptionToArchitecture(transitionalArchitectureRef: Ref<ArchitectureDescription>, setting: TransformSetting): Architecture {
    const oldValues: { arch: ArchitectureDescription, phaseId: PhaseId }[] = [];
    const currentPhase: CurrentPhaseInfo = reactive({
        current: null
    });
 
    const blocks = computed(() => BlockGroupDescriptionsToBlock(transitionalArchitectureRef.value))
    const phaseIndex = buildPhasesIndex(transitionalArchitectureRef.value.phases);
    const style = computed(() => styleDescriptionToArchitectureStyle(transitionalArchitectureRef.value, blocks.value, setting));
    const next = () => {
        const oldVal = deepCopy(transitionalArchitectureRef.value);
        const phase = phaseIndex.getPhaseById(currentPhase.current);
        if (isNotNullOrUndefined(currentPhase.current) && !phase?.hasNext) {
            return;
        }
        const nextPhaseId = startPhases(transitionalArchitectureRef.value, phaseIndex, currentPhase);
        if (currentPhase.current !== nextPhaseId) {
            oldValues.push({
                arch: oldVal,
                phaseId: currentPhase.current
            });
        }
        currentPhase.current = nextPhaseId;
        return nextPhaseId;
    };
    const back = () => {
        let val = oldValues.pop();
        while (oldValues.length > 0 && oldValues[oldValues.length - 1].phaseId == val?.phaseId) {
            val = oldValues.pop();
        }
        if (val) {
            transitionalArchitectureRef.value = val.arch;
            currentPhase.current = val.phaseId;
        }
        return val?.phaseId;
    };
    const toPhase = (phaseId: number | string) => {
        const phaseInd = phaseIndex.getPhaseIndex(phaseId);
        const currentPhaseInd = phaseIndex.getPhaseIndex(currentPhase.current);
        if (phaseInd === currentPhaseInd) {
            return;
        }
        const walkerFn = phaseInd > currentPhaseInd ? next : back;
        let curPhaseId = null;
        do {
            curPhaseId = walkerFn();
        } while (isNotNullOrUndefined(curPhaseId) && curPhaseId !== phaseInd);
    };
    const debugSelect = (selected: SelectedProperties) => {
        const debugContext: DebugSelectContext = {
            style,
            blocks,
            phaseIndex,
            transformSetting: setting
        };
        const actions = getDebugActions(selected, debugContext);
        const debugState: DebugStateContainer = {
            selectedBlocks: [],
            lines: []
        };
        transitionalArchitectureRef.value.debugState = debugState;
        actions.forEach(x => {
            if (x.type === DebugType.Select) {
                x.blockIds.forEach(x => debugState.selectedBlocks!.push(x));
            } else if (x.type === DebugType.StartPhase) {
                toPhase(x.phaseId);
            } else if (x.type === DebugType.Line) {
                debugState!.lines!.push(x);
            }
        });
    };
    return {
        name: transitionalArchitectureRef.value.name,
        blocks,
        style,
        next,
        back,
        toPhase,
        debugSelect,
        phases: phaseIndex.phases,
        currentPhase: computed(() => currentPhase.current),
        debugState: computed(() => transitionalArchitectureRef.value.debugState)
    }
}

export function BlockGroupDescriptionsToBlock(description: ArchitectureDescription): Block[] {
    return blockGroupDescriptionsToBlock(description);
}