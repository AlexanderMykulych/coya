import type { Ref } from 'vue';
import { computed } from 'vue';
import { isNotNullOrUndefined, isNullOrUndefined } from 'coya-util';
import type { ActionSetting, ArchitectureDescription, PhaseAction } from '../descriptionTypes';
import type { PhaseId, PhaseIndex, PhaseIndexItem, PhaseIndexItemAction } from '../types';
import { ActionType } from '../types';

export function buildPhasesIndex(architectureDescription: Ref<ArchitectureDescription>): PhaseIndex {
    const index = computed(() => buildIndexObject(architectureDescription.value.phases));
    return {
        getNextPhaseById: (id: PhaseId) => {
            if (isNullOrUndefined(id))
                return index.value.find(x => x.phaseId === 0);

            return index.value.find(x => x.phaseId === id + 1);
        },
        phases: index.value.map(x => x.phaseId),
        getPhaseIndex: (phase) => {
            const id = typeof phase === 'string' ? Number(phase) : phase;
            return index.value.findIndex(x => x.phaseId === id);
        },
        getPhaseById: (id: PhaseId) => {
            return index.value.find(x => x.phaseId === id);
        },
        findPhaseIdBy: (func: (_: PhaseIndexItem) => boolean) => {
            const item = index.value.find(func);
            return item?.phaseId;
        },
    };
}
function buildIndexObject(phases: PhaseAction[] | undefined | null): PhaseIndexItem[] {
    if (!phases)
        return [];

    return phases.map((phase, phaseIndex) => {
        const actions: PhaseIndexItemAction[] = Object
            .keys(phase)
            .flatMap((key, actionIndex) => {
                if (!(Object.values(ActionType).includes(key)))
                    return;

                const action = phase[key];
                let actions: (string | ActionSetting)[] = [];
                if (!Array.isArray(action))
                    actions = [action];
                else
                    actions = action;

                return actions.map<PhaseIndexItemAction>((y, index) => ({
                    action: {
                        name: key as ActionType,
                        value: y as any,
                    },
                    actionId: actionIndex,
                    actionIndex: index,
                }));
            })
            .filter(isNotNullOrUndefined);
        return <PhaseIndexItem>{
            hasNext: phaseIndex < phases.length - 1,
            phaseId: phaseIndex,
            actions,
        };
    });
}
