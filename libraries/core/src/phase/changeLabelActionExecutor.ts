import { ChangeLabelActionSetting } from "../descriptionTypes";
import { isHasLabel } from "../typeGuards";
import { Action, ActionExecutorContext, Change, ChangeType } from "../types";

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
                }
            };
        });
}
