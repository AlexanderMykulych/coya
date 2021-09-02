import { AddNewBlockActionSetting } from "../descriptionTypes";
import { Action, ActionExecutorContext, Change, ChangeType } from "../types";

export function addNewBlockActionExecutor(context: ActionExecutorContext, action: Action): Change[] | null {
    if (!context) {
        return null;
    }
    const val = action.value as AddNewBlockActionSetting;
    return Object
        .keys(val)
        .map(key => ({
            type: ChangeType.AddNewBlock,
            setting: {
                newBlockId: key,
                blockSettings: val[key]
            }
        }));
}
