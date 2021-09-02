import { ArchitectureDescription } from "../descriptionTypes";
import { isNotNullOrUndefined } from "../typeGuards";
import { ActionExecutorContext, ActionType, Change, ChangeType, CurrentPhaseInfo, PhaseId, PhaseIndex, PhaseIndexItemAction } from "../types";
import { addNewBlockActionExecutor } from "./addNewBlockActionExecutor";
import { connectActionExecutor } from "./connectActionExecutor";

export function startPhases(architecture: ArchitectureDescription, phaseIndex: PhaseIndex, phaseInfo: CurrentPhaseInfo): PhaseId {
    const indexItems = phaseIndex.getPhaseById(phaseInfo.current);
    if (indexItems) {
        return indexItems.map(indexItem => {
            const actionContext = <ActionExecutorContext>{
                indexItem,
                architecture,
                phaseIndex
            };
            var changes = indexItem.actions.flatMap(item => executePhaseIndex(item, actionContext));
            changes
                .filter(isNotNullOrUndefined)
                .forEach(change => makeChange(architecture, change));
            return indexItem.nextPhaseId;
        });
    }
    return null;
}


function executePhaseIndex(item: PhaseIndexItemAction, context: ActionExecutorContext): Change[] | null {
    if (item.action.name === ActionType.Connect) {
        return connectActionExecutor(context, item.action);
    } else if (item.action.name === ActionType.AddNewBlock) {
        return addNewBlockActionExecutor(context, item.action);
    }
    throw "Not implemented!";
}

function makeChange(architecture: ArchitectureDescription, change: Change): void {
    if (change.type === ChangeType.AddNewBlock) {
        architecture.blocks[change.setting.newBlockId] = change.setting.blockSettings;
        return;
    }
    throw new Error("Function not implemented.");
}


