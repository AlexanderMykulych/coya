import { DebugAction, DebugType } from "../debugTypes";
import { isNotNullOrUndefined } from "../typeGuards";
import { SelectedProperties } from "../types";
import { getSelectedBlockId, isBlockSelected } from "./isBlockSelected";
import { getPhaseIndex, isPhaseSelected } from "./isPhaseSelected";

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
        return isNotNullOrUndefined(index) ? [{
            type: DebugType.StartPhase,
            phaseId: index
        }] : [];
    }
    return [];
}