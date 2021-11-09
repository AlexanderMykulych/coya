import { DebugAction, DebugType } from "../debugTypes";
import { ChangeLabelActionSetting } from "../descriptionTypes";
import { isHasLabel } from "../typeGuards";
import { Action, ActionDebugInfo, Change, ChangeOwnerType, ChangeType } from "../types";

export function changeLabelActionExecutor(phaseId: number, action: Action): Change[] | null {
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
                    phaseId,
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