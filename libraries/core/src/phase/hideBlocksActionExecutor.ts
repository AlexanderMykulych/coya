import type { DebugAction } from '../debugTypes';
import { DebugType } from '../debugTypes';
import { isHideBlocksActionSetting } from '../typeGuards';
import type { Action, ActionDebugInfo, Change } from '../types';
import { ChangeType } from '../types';

export function hideBlocksActionExecutor(_: number, action: Action): Change[] | null {
    if (isHideBlocksActionSetting(action.value)) {
        return [{
            type: ChangeType.ChangeStyle,
            setting: {
                blockId: action.value,
                newStyle: {
                    css: {
                        display: 'none',
                    },
                },
            },
        }];
    }
    return [];
}

export function hideBlocksActionDebugger(actionInfo: ActionDebugInfo): DebugAction[] {
    if (actionInfo.actionProperty) {
        return [{
            type: DebugType.Select,
            blockIds: [actionInfo.actionProperty],
        }];
    }
    return [];
}
