import { ChangeBlockPositionActionSetting } from "../descriptionTypes";
import { ActionExecutorContext, Action, Change, ChangeType } from "../types";


export function changeBlockPositionActionExecutor(context: ActionExecutorContext, action: Action): Change[] | null {
    if (!context) {
        return null;
    }
    const val = action.value as ChangeBlockPositionActionSetting;
    return Object
        .keys(val)
        .map(key => ({
            type: ChangeType.ChangeStyle,
            setting: {
                blockId: key,
                newStyle: {
                    position: val[key]
                }
            }
        }));
}