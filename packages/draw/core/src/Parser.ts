/* eslint-disable */
import type { Ref } from 'vue';
import { computed, isRef, reactive, ref } from 'vue';
import { deepCopy, isNotNullOrUndefined } from 'coya-util';
import { blockGroupDescriptionsToBlock } from './block/blockGroupDescriptionsToBlock';
import type { ArchitectureDescription, TransformSetting } from './descriptionTypes';
import { isArchitectureDescription } from './typeGuards';
import type { Architecture, Block, DebugSelectContext, DebugStateContainer, SelectedProperties, TransformationResult } from './types';
import { styleDescriptionToArchitectureStyle } from './style/styleDescriptionToArchitectureStyle';
import { startPhases } from './phase/startPhases';
import { buildPhasesIndex } from './phase/buildPhasesIndex';
import { getDebugActions } from './debug/getDebugActions';
import { DebugType } from './debugTypes';
import { applyPositioning } from '.';

export function transformToArchitecture(description: Ref<unknown> | unknown, setting: TransformSetting): TransformationResult {
    const refDescription = isRef(description) ? description : ref(description);
    const value = refDescription.value;
    const transitionalArchitectureRef = ref<ArchitectureDescription>(deepCopy(value));
    preprocessArchitecture(transitionalArchitectureRef);
    transitionalArchitectureRef.value!.debugState = <DebugStateContainer>{
        selected: null,
    };

    const architecture = computed<Architecture>(() => {
        if (isArchitectureDescription(transitionalArchitectureRef.value))
            return transformDescriptionToArchitecture(transitionalArchitectureRef, setting, refDescription as Ref<ArchitectureDescription>);

        return {
            name: '',
            blocks: ref([]),
            style: ref(null),
            phases: [],
            currentPhase: null,
            next: () => null,
            back: () => null,
            debugSelect: () => { },
            toPhase: () => { },
        };
    });
    return {
        architecture,
        config: transitionalArchitectureRef,
    };
}

export function transformDescriptionToArchitecture(
    transitionalArchitectureRef: Ref<ArchitectureDescription>,
    setting: TransformSetting,
    initState: Ref<ArchitectureDescription>,
): Architecture {
    const currentPhase = setting.currentPhase;

    const blocks = computed(() => BlockGroupDescriptionsToBlock(transitionalArchitectureRef.value));
    const phaseIndex = buildPhasesIndex(transitionalArchitectureRef);
    const style = computed(() =>
        styleDescriptionToArchitectureStyle(transitionalArchitectureRef.value, blocks.value, setting),
    );
    const next = () => {
        const phase = phaseIndex.getPhaseById(currentPhase.current);
        if (isNotNullOrUndefined(currentPhase.current) && !phase?.hasNext)
            return;

        const nextPhaseId = startPhases(transitionalArchitectureRef.value, phaseIndex, currentPhase);

        currentPhase.current = nextPhaseId;
        return nextPhaseId;
    };
    const back = () => {
        if (currentPhase.current != null) {
            const nextPhase = currentPhase.current - 1;
            toPhase(nextPhase);
            return nextPhase;
        }

        return null;
    };
    const toPhase = (phaseId: number | string | null | undefined) => {
        if (Number(phaseId) < 0)
            phaseId = null;

        currentPhase.current = null;
        transitionalArchitectureRef.value = deepCopy(initState.value);
        const phaseInd = phaseIndex.getPhaseIndex(phaseId);
        const currentPhaseInd = phaseIndex.getPhaseIndex(currentPhase.current);
        if (phaseInd === currentPhaseInd)
            return;

        const walkerFn = next;
        let curPhaseId = null;
        do
            curPhaseId = walkerFn();
        while (isNotNullOrUndefined(curPhaseId) && curPhaseId !== phaseInd);
    };
    const debugSelect = (selected: SelectedProperties) => {
        const debugContext: DebugSelectContext = {
            style,
            blocks,
            phaseIndex,
            transformSetting: setting,
        };
        const actions = getDebugActions(selected, debugContext);
        const debugState: DebugStateContainer = {
            selectedBlocks: [],
            lines: [],
        };
        transitionalArchitectureRef.value.debugState = debugState;
        actions.forEach((x) => {
            if (x.type === DebugType.Select)
                x.blockIds.forEach(x => debugState.selectedBlocks!.push(x));
            else if (x.type === DebugType.StartPhase)
                toPhase(x.phaseId);
            else if (x.type === DebugType.Line)
                debugState!.lines!.push(x);
        });
    };
    if (currentPhase.current !== null)
        toPhase(currentPhase.current);

    return reactive<Architecture>({
        name: transitionalArchitectureRef.value.name,
        blocks,
        style,
        next,
        back,
        toPhase,
        debugSelect,
        phases: phaseIndex.phases,
        currentPhase: computed(() => currentPhase.current),
        debugState: computed(() => transitionalArchitectureRef.value.debugState),
    }) as Architecture;
}

export function BlockGroupDescriptionsToBlock(description: ArchitectureDescription): Block[] {
    return blockGroupDescriptionsToBlock(description);
}

export function preprocessArchitecture(architecture: Ref<ArchitectureDescription>) {
    const layout = architecture.value.style?.layout;
    if (layout) {
        applyPositioning(architecture.value, layout.type, {
            layout: {
                getHeight: function getHeight() {
                    return layout.default?.height ?? 200;
                },
                getWidth: function getWidth() {
                    return layout.default?.width ?? 500;
                },
                getVGap: function getVGap() {
                    return layout.default?.vGap ?? 50;
                },
                getHGap: function getHGap() {
                    return layout.default?.hGap ?? 100;
                },
            }
        });
    }
}