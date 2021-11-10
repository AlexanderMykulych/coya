import { ActionSetting, PhaseAction } from "../descriptionTypes";
import { isNotNullOrUndefined, isNullOrUndefined } from "../typeGuards";
import { PhaseId, PhaseIndex, PhaseIndexItem, PhaseIndexItemAction, ActionType } from "../types";

export function buildPhasesIndex(phases?: PhaseAction[]): PhaseIndex {
    const index = buildIndexObject(phases);
    return {
        getNextPhaseById: (id: PhaseId) => {
            if (isNullOrUndefined(id)) {
                return index.find(x => x.phaseId === 0);
            }
            return index.find(x => x.phaseId === id + 1);
        },
        phases: index.map(x => x.phaseId),
        getPhaseIndex: phase => {
            const id = typeof phase === "string" ? Number(phase) : phase;
            return index.findIndex(x => x.phaseId === id);
        },
        getPhaseById: (id: PhaseId) => {
            return index.find(x => x.phaseId === id);
        },
        findPhaseIdBy: (func: (_: PhaseIndexItem) => boolean) => {
            const item = index.find(func);
            return item?.phaseId;
        }
    };
}
function buildIndexObject(phases: PhaseAction[] | undefined | null): PhaseIndexItem[] {
    if (!phases) {
        return [];
    }
    return phases.map((phase, phaseIndex) => {
        const actions: PhaseIndexItemAction[] = Object
            .keys(phase)
            .flatMap((key, actionIndex) => {
                if (!(Object.values(ActionType).some(x => x === key))) {
                    return;
                }
                let action = phase[key];
                let actions: (string | ActionSetting)[] = [];
                if (!Array.isArray(action)) {
                    actions = [action];
                } else {
                    actions = action;
                }
                return actions.map<PhaseIndexItemAction>(y => ({
                    action: {
                        name: key as ActionType,
                        value: y as any
                    },
                    actionId: actionIndex
                }));
            })
            .filter(isNotNullOrUndefined);
        return <PhaseIndexItem>{
            hasNext: phaseIndex < phases.length - 1,
            phaseId: phaseIndex,
            actions: actions
        };
    })
}

