import type { BlockStyleActionSetting } from '../descriptionTypes';
import type { Action, Change } from '../types';
import { ChangeType } from '../types';

export function changeBlockStyleExecutor(_: number, action: Action): Change[] | null {
    const val = action.value as BlockStyleActionSetting;
    return Object
        .keys(val)
        .map(key => ({
            type: ChangeType.ChangeStyle,
            setting: {
                blockId: key,
                newStyle: val[key],
            },
        }));
}
