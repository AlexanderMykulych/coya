import { isNotNullOrUndefined } from 'coya-util';
import type { ArchitectureDescription } from '../descriptionTypes';
import type { Change, PhaseIndexItemAction } from '../types';
import { ChangeOwnerType } from '../types';
import { actionExecutors } from './actionExecutors';
import { makeChange } from './makeChange';

export function executeActions(architecture: ArchitectureDescription, actions: PhaseIndexItemAction[], phaseId: number) {
    const changes = actions.flatMap((item, index) => executePhaseIndex(item, phaseId, index));
    changes
        .filter(isNotNullOrUndefined)
        .forEach(change => makeChange(architecture, change));
    return phaseId;
}
function executePhaseIndex(item: PhaseIndexItemAction, phaseId: number, actionId: number): Change[] | null {
    const action = actionExecutors
        .find(x => x.type === item.action.name);
    if (action) {
        const res = action.executor(phaseId, item.action, actionId);
        res?.forEach(x => x.owner = {
            type: ChangeOwnerType.Phase,
            phaseId,
            actionIndex: item.actionIndex,
        });
        return res;
    }
    throw 'Not implemented!';
}
