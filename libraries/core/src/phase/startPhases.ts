import { ArchitectureDescription } from "../descriptionTypes";
import { isNotNullOrUndefined } from "../typeGuards";
import {
    ActionExecutorContext, Change, CurrentPhaseInfo,
    PhaseId, PhaseIndex,
    PhaseIndexItemAction} from "../types";
import { actionExecutors } from "./actionExecutors";
import { makeChange } from "./makeChange";

export function startPhases(architecture: ArchitectureDescription, phaseIndex: PhaseIndex, phaseInfo: CurrentPhaseInfo): PhaseId {
    const indexItem = phaseIndex.getNextPhaseById(phaseInfo.current);
    if (indexItem) {
        const actionContext = <ActionExecutorContext>{
            indexItem,
            architecture,
            phaseIndex
        };
        const changes = indexItem.actions.flatMap(item => executePhaseIndex(item, actionContext));
        changes
            .filter(isNotNullOrUndefined)
            .forEach(change => makeChange(architecture, change));
        return indexItem.phaseId;
    }
    return null;
}


function executePhaseIndex(item: PhaseIndexItemAction, context: ActionExecutorContext): Change[] | null {
    const action = actionExecutors
        .find(x => x.type === item.action.name)
    if (action) {
        return action.executor(context, item.action);
    }
    throw "Not implemented!";
}