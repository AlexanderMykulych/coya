import { BlockStyleActionSetting } from "../descriptionTypes";
import { Action, Change, ChangeType, ChangeOwnerType } from "../types";


export function changeBlockStyleExecutor(phaseId: number, action: Action): Change[] | null {
    const val = action.value as BlockStyleActionSetting;
    return Object
        .keys(val)
        .map(key => ({
            type: ChangeType.ChangeStyle,
            setting: {
                blockId: key,
                newStyle: val[key]
            },
            owner: {
                type: ChangeOwnerType.Phase,
                phaseId
            }
        }));
}