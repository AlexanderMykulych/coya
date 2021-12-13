import { DebugAction, DebugType } from "../debugTypes";
import { isHideBlocksActionSetting } from "../typeGuards";
import { Action, ActionDebugInfo, Change, ChangeType } from "../types";

export function hideBlocksActionExecutor(_: number, action: Action): Change[] | null {
    if (isHideBlocksActionSetting(action.value)) {
        return [{
            type: ChangeType.ChangeStyle,
            setting: {
                blockId: action.value,
                newStyle: {
                    css: {
                        display: "none"
                    }
                }
            }
        }];
    }
    return [];
}

export function hideBlocksActionDebugger(actionInfo: ActionDebugInfo): DebugAction[] {
    if (actionInfo.actionProperty) {
        return [{
            type: DebugType.Select,
            blockIds: [actionInfo.actionProperty]
        }];
    }
    return [];
}