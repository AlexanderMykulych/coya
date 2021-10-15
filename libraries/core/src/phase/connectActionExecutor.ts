import { ActionDebugInfo } from "..";
import { DebugAction, DebugType } from "../debugTypes";
import { BlockElementType } from "../descriptionTypes";
import { isConnectActionSetting } from "../typeGuards";
import { Action, ActionExecutorContext, Change, ChangeType } from "../types";

export function connectActionExecutor(context: ActionExecutorContext, action: Action): Change[] | null {
    if (isConnectActionSetting(action.value)) {
        const newBlockId = action.value.name ?? `line_${context.indexItem.phaseId}`;
        return [{
            type: ChangeType.AddNewBlock,
            setting: {
                newBlockId,
                blockSettings: {
                    ...action.value,
                    type: BlockElementType.Line,
                    label: action.value.label ?? ""
                }
            }
        }];
    }
    return null;
}

export function connectActionDebugger(actionInfo: ActionDebugInfo): DebugAction[] {
    switch (actionInfo.actionProperty) {
        case "from":
        case "to":
        case "name":
            return [{
                type: DebugType.Select,
                blockIds: [actionInfo.actionValue]
            }];
        default:
            return [];
    }
}