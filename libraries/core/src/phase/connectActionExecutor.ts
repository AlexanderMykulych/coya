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
                    label: action.value.label ?? newBlockId
                }
            }
        }];
    }
    return null;
}