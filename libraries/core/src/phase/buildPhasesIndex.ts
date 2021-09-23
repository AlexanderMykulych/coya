import { ActionSetting, ConnectActionSetting, PhaseAction } from "../descriptionTypes";
import { isNullOrUndefined } from "../typeGuards";
import { PhaseId, PhaseIndex, PhaseIndexItem, PhaseIndexItemAction } from "../types";

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
                let action = phase[key];
                let actions: (string | ActionSetting)[] = [];
                if (!Array.isArray(action)) {
                    actions = [action];
                } else {
                    actions = action;
                }
                return actions.map<PhaseIndexItemAction>(y => ({
                    action: {
                        name: key,
                        value: y as ConnectActionSetting
                    },
                    actionId: actionIndex
                }));
            });
        return <PhaseIndexItem>{
            hasNext: phaseIndex < phases.length - 1,
            phaseId: phaseIndex,
            actions: actions
        };
    })
}

