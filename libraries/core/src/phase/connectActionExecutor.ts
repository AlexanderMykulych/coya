import { BlockElementType } from "../descriptionTypes";
import { Action, ActionExecutorContext, Change, ChangeType } from "../types";

export function connectActionExecutor(context: ActionExecutorContext, action: Action): Change {
    return context && {
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
    };
}