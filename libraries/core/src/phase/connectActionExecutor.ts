import { DebugAction, DebugType } from "../debugTypes";
import { BlockElementType } from "../descriptionTypes";
import { isConnectActionSetting } from "../typeGuards";
import { Action, ActionDebugInfo, Change, ChangeOwnerType, ChangeType } from "../types";

export function connectActionExecutor(phaseId: number, action: Action, actionIndex: number): Change[] | null {
    if (isConnectActionSetting(action.value)) {
        const newBlockId = action.value.name ?? `line_${phaseId}_${actionIndex}`;
        return [{
            type: ChangeType.AddNewBlock,
            setting: {
                newBlockId,
                blockSettings: {
                    ...action.value,
                    type: BlockElementType.Line,
                    label: action.value.label ?? ""
                }
            },
            owner: {
                type: ChangeOwnerType.Phase,
                phaseId
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