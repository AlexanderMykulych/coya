import { ShowBlockActionSetting } from "../descriptionTypes";
import { Action, Change, ChangeType } from "../types";

export const showActionExecutor = (_: number, action: Action): Change[] | null => {
    const val = action.value as ShowBlockActionSetting;
    return Object
        .entries(val)
        .map(([key, value]) => ({
            type: ChangeType.ChangeStyle,
            setting: {
                blockId: key,
                newStyle: {
                    css: {
                        display: value ? undefined : "none",
                    },
                }
            }
        }));
};

export const showBlockRenamer = (actionSetting: ShowBlockActionSetting, oldVal: string, value: string): void => {
    if (actionSetting[oldVal]) {
        actionSetting[value] = actionSetting[oldVal];
        delete actionSetting[oldVal];
    }
}
