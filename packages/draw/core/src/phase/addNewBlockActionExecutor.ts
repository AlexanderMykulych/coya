import type { ActionDebugInfo } from '..';
import type { DebugAction } from '../debugTypes';
import { DebugType } from '../debugTypes';
import type { AddNewBlockActionSetting } from '../descriptionTypes';
import type { Action, Change } from '../types';
import { ChangeType } from '../types';

export function addNewBlockActionExecutor(_: number, action: Action): Change[] | null {
    const val = action.value as AddNewBlockActionSetting;
    return Object
        .keys(val)
        .map(key => ({
            type: ChangeType.AddNewBlock,
            setting: {
                newBlockId: key,
                blockSettings: val[key],
            },
        }));
}
export function addNewBlockActionDebugger(actionInfo: ActionDebugInfo): DebugAction[] {
    if (actionInfo.actionProperty) {
        return [{
            type: DebugType.Select,
            blockIds: [actionInfo.actionProperty],
        }];
    }
    return [];
}

export function addNewBlockBlockRenamer(actionSetting: AddNewBlockActionSetting, oldVal: string, value: string): void {
    if (actionSetting[oldVal]) {
        actionSetting[value] = actionSetting[oldVal];
        delete actionSetting[oldVal];
    }
}
