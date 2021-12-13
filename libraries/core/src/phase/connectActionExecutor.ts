import { DebugAction, DebugType } from "../debugTypes";
import { BlockElementType, ConnectActionSetting } from "../descriptionTypes";
import { isConnectActionSetting } from "../typeGuards";
import { Action, ActionDebugInfo, Change, ChangeType } from "../types";

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

export function connectBlockRenamer(actionSetting: ConnectActionSetting, oldVal: string, value: string): void {
    if (actionSetting.to === oldVal) {
        actionSetting.to = value;
    }
    if (actionSetting.from === oldVal) {
        actionSetting.from = value;
    }
}