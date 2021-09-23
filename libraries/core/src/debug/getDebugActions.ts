import { DebugAction, DebugType, StartPhaseDebugAction } from "../debugTypes";
import { actionExecutors } from "../phase/actionExecutors";
import { isNotNullOrUndefined } from "../typeGuards";
import { SelectedProperties } from "../types";
import { getSelectedBlockId, isBlockSelected } from "./isBlockSelected";
import { getActionInfo, getPhaseIndex, isPhaseSelected } from "./isPhaseSelected";

export function getDebugActions(selected: SelectedProperties): DebugAction[] {
    if (isBlockSelected(selected)) {
        return [
            {
                type: DebugType.Select,
                blockIds: [getSelectedBlockId(selected)].filter(isNotNullOrUndefined)
            }
        ]
    }
    if (isPhaseSelected(selected)) {
        const index = getPhaseIndex(selected);
        const items = isNotNullOrUndefined(index) ? [
            <StartPhaseDebugAction>{
                type: DebugType.StartPhase,
                phaseId: index
            }
        ] : [];
        const actionInfo = getActionInfo(selected);
        if (actionInfo.action) {
            const action = actionExecutors.find(x => x.type === actionInfo.action);
            if (action && action.debugger) {
                return [
                    ...action.debugger(actionInfo),
                    ...items
                ];
            }
        }
        return items;
    }
    return [];
}