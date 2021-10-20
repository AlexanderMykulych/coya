import { DebugAction, DebugType } from "../debugTypes";
import { ChangeLabelActionSetting } from "../descriptionTypes";
import { isHasLabel } from "../typeGuards";
import { Action, ActionDebugInfo, ActionExecutorContext, Change, ChangeOwnerType, ChangeType } from "../types";

export function changeLabelActionExecutor(context: ActionExecutorContext, action: Action): Change[] | null {
    if (!context) {
        return null;
    }
    const val = action.value as ChangeLabelActionSetting;
    return Object
        .keys(val)
        .map(key => {
            const v = val[key];
            return {
                type: ChangeType.ChangeStyle,
                setting: {
                    blockId: key,
                    newStyle: {
                        label: isHasLabel(v) ? v.label : v
                    }
                },
                owner: {
                    type: ChangeOwnerType.Phase,
                    phaseId: context.indexItem.phaseId
                }
            };
        });
}

export function changeLabelActionDebugger(actionInfo: ActionDebugInfo): DebugAction[] {
    if (actionInfo.actionProperty) {
        return [{
            type: DebugType.Select,
            blockIds: [actionInfo.actionProperty]
        }];
    }
    return [];
}