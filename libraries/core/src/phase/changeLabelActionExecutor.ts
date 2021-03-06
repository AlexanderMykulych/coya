import type { DebugAction } from '../debugTypes';
import { DebugType } from '../debugTypes';
import type { ChangeLabelActionSetting } from '../descriptionTypes';
import { isHasLabel } from '../typeGuards';
import type { Action, ActionDebugInfo, Change } from '../types';
import { ChangeType } from '../types';

export function changeLabelActionExecutor(_: number, action: Action): Change[] | null {
    const val = action.value as ChangeLabelActionSetting;
    return Object
        .keys(val)
        .map((key) => {
            const v = val[key];
            return {
                type: ChangeType.ChangeStyle,
                setting: {
                    blockId: key,
                    newStyle: {
                        label: isHasLabel(v) ? v.label : v,
                    },
                },
            };
        });
}

export function changeLabelActionDebugger(actionInfo: ActionDebugInfo): DebugAction[] {
    if (actionInfo.actionProperty) {
        return [{
            type: DebugType.Select,
            blockIds: [actionInfo.actionProperty],
        }];
    }
    return [];
}
