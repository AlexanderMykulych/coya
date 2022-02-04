import type { ShowBlockActionSetting } from '../descriptionTypes';
import type { Action, Change } from '../types';
import { ChangeType } from '../types';

export const hideActionExecutor = (_: number, action: Action): Change[] | null => {
    const val = action.value as ShowBlockActionSetting;
    return Object
        .keys(val)
        .map(key => ({
            type: ChangeType.ChangeStyle,
            setting: {
                blockId: key,
                newStyle: {
                    css: {
                        display: 'node',
                    },
                },
            },
        }));
};
