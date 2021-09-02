import { BlockElementType } from "../descriptionTypes";
import { isConnectActionSetting } from "../typeGuards";
import { Action, ActionExecutorContext, Change, ChangeType } from "../types";

export function connectActionExecutor(context: ActionExecutorContext, action: Action): Change[] | null {
    if (isConnectActionSetting(action.value)) {
        return [{
            type: ChangeType.AddNewBlock,
            setting: {
                newBlockId: `line_${context.indexItem.phaseId}`,
                blockSettings: {
                    from: action.value.from,
                    to: action.value.to,
                    type: BlockElementType.Line,
                    label: "line"
                }
            }
        }];
    }
    return null;
}