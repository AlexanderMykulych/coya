import { ActionSetting, ConnectActionSetting, PhaseStep } from "../descriptionTypes";
import { isGraduallyPhases, isNotNullOrUndefined, isParallelPhase, isPhaseAction } from "../typeGuards";
import { PhaseId, PhaseIndex, PhaseIndexItem, PhaseIndexItemAction } from "../types";

export function buildPhasesIndex(phases: PhaseStep | undefined | null): PhaseIndex {

    const index = buildIndexObject(phases);
    return {
        getPhaseById: (id: PhaseId) => {
            if (!id) {
                return index.filter(x => x.isStart);
            }
            let ids: string[] = [];
            if (Array.isArray(id)) {
                ids = id.filter(isNotNullOrUndefined);
            } else {
                ids = [id]
            }
            return index.filter(x => x.phaseId && ids.indexOf(x.phaseId) > -1);
        },
        phases: index.map(x => x.phaseId),
        getPhaseIndex: phase => index.findIndex(x => x.phaseId === phase)
    };
}
function buildIndexObject(phase: PhaseStep | undefined | null, isStart: boolean = true, id: string = "start"): PhaseIndexItem[] {
    if (!phase) {
        return [];
    }
    if (isPhaseAction(phase)) {
        const actions: PhaseIndexItemAction[] = Object
            .keys(phase)
            .flatMap(key => {
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
                    }
                }));
            });
        return [{
            isStart: isStart,
            nextPhaseId: null,
            phaseId: `${id}`,
            actions: actions
        }];
    } else if (isParallelPhase(phase)) {
        const items =
            Object.keys(phase)
                .flatMap(x => {
                    const val = phase[x];
                    return buildIndexObject(val, isStart, `${id}_${x}`);
                });
        return items;
    } else if (isGraduallyPhases(phase)) {
        const childId = `${id}_child`;
        const items = phase.map((x, index) => buildIndexObject(x, isStart && index === 0, childId));
        
        items.forEach((group, index) => {
            group.forEach(groupItem => {
                if (groupItem.phaseId === childId) {
                    groupItem.phaseId += `_${index}`;
                    if (index + 1 < items.length) {
                        groupItem.nextPhaseId = `${childId}_${index + 1}`;
                    }
                }
            })
        })
        return items.flatMap(x => x);
    }
    throw "Not implemented!";
}

