import { BlockStyleActionSetting } from "../descriptionTypes";
import { Action, Change, ChangeType } from "../types";


export function changeBlockStyleExecutor(_: number, action: Action): Change[] | null {
    const val = action.value as BlockStyleActionSetting;
    return Object
        .keys(val)
        .map(key => ({
            type: ChangeType.ChangeStyle,
            setting: {
                blockId: key,
                newStyle: val[key]
            }
        }));
}