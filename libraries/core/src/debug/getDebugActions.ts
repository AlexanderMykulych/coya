import { DebugAction, DebugType, StartPhaseDebugAction } from "../debugTypes";
import { actionExecutors } from "../phase/actionExecutors";
import { isNotNullOrUndefined } from "coya-util";
import { ActionType, DebugSelectContext, SelectedProperties } from "../types";
import { getSelectedBlockId, isBlockSelected } from "./isBlockSelected";
import { getActionInfo, getPhaseIndex, isPhaseSelected } from "./isPhaseSelected";
import { getStyleBlockSelected, isStyleBlockSelected, isStylePositionSelected, isStyleSelected } from "./isStyleSelected";
import { getStylePositionDebugActions } from "./getStylePositionDebugActions";

export function getDebugActions(selected: SelectedProperties, context: DebugSelectContext): DebugAction[] {
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
    if (isStyleSelected(selected)) {
        const items: DebugAction[] = [];
        if (isStyleBlockSelected(selected)) {
            const blockId = getStyleBlockSelected(selected);
            items.push({
                type: DebugType.Select,
                blockIds: [blockId]
            });
            const block = context.blocks.value.find(x => x.id === blockId);
            if (!block) {
                const phaseId = context.phaseIndex
                    .findPhaseIdBy(item =>
                        item
                            .actions
                            .some(action =>
                                action.action.name === ActionType.AddNewBlock &&
                                isNotNullOrUndefined((action.action.value as any)[blockId])
                            )
                    );
                if (phaseId) {
                    items.push({
                        type: DebugType.StartPhase,
                        phaseId
                    });
                }
            }
        }
        if (isStylePositionSelected(selected)) {
            return [
                ...items,
                ...getStylePositionDebugActions(selected, context)
            ]
        }
        return items;
    }
    return [];
}