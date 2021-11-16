import { ArchitectureDescription } from "../descriptionTypes";
import { isNotNullOrUndefined } from "../typeGuards";
import { Change, PhaseIndexItemAction } from "../types";
import { actionExecutors } from "./actionExecutors";
import { makeChange } from "./makeChange";


export function executeActions(architecture: ArchitectureDescription, actions: PhaseIndexItemAction[], phaseId: number) {
    const changes = actions.flatMap((item, index) => executePhaseIndex(item, phaseId, index));
    changes
        .filter(isNotNullOrUndefined)
        .forEach(change => makeChange(architecture, change));
    return phaseId;
}
function executePhaseIndex(item: PhaseIndexItemAction, phaseId: number, actionIndex: number): Change[] | null {
    const action = actionExecutors
        .find(x => x.type === item.action.name);
    if (action) {
        return action.executor(phaseId, item.action, actionIndex);
    }
    throw "Not implemented!";
}
