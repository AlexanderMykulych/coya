import { ChangeLabelActionSetting } from "../descriptionTypes";
import { Action, ActionExecutorContext, Change, ChangeType } from "../types";

export function changeLabelActionExecutor(context: ActionExecutorContext, action: Action): Change[] | null {
    if (!context) {
        return null;
    }
    const val = action.value as ChangeLabelActionSetting;
    return Object
        .keys(val)
        .map(key => ({
            type: ChangeType.ChangeStyle,
            setting: {
                blockId: key,
                newStyle: {
                    label: val[key].label
                }
            }
        }));
}
