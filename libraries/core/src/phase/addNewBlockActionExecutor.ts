import { ActionDebugInfo } from "..";
import { DebugAction, DebugType } from "../debugTypes";
import { AddNewBlockActionSetting } from "../descriptionTypes";
import { Action, Change, ChangeOwnerType, ChangeType } from "../types";

export function addNewBlockActionExecutor(phaseId: number, action: Action): Change[] | null {
    const val = action.value as AddNewBlockActionSetting;
    return Object
        .keys(val)
        .map(key => ({
            type: ChangeType.AddNewBlock,
            setting: {
                newBlockId: key,
                blockSettings: val[key]
            },
            owner: {
                type: ChangeOwnerType.Phase,
                phaseId
            }
        }));
}
export function addNewBlockActionDebugger(actionInfo: ActionDebugInfo): DebugAction[] {
    if (actionInfo.actionProperty) {
        return [{
            type: DebugType.Select,
            blockIds: [actionInfo.actionProperty]
        }];
    }
    return [];
}
