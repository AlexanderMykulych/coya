import { ChangeBlockPositionActionSetting } from "../descriptionTypes";
import { Action, Change, ChangeType } from "../types";


export function changeBlockPositionActionExecutor(_: number, action: Action): Change[] | null {
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