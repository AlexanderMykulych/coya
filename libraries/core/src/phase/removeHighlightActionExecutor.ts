import { Action, ActionExecutorContext, Change, ChangeType } from "../types";

export function removeHighlightActionExecutor(context: ActionExecutorContext, _: Action): Change[] | null {
    const blocks = context.architecture.style?.blocks || {};
    return [{
        type: ChangeType.RemoveBlock,
        setting: {
            blocks: Object.keys(blocks)
                .filter(x => blocks[x].isHighlight)
        }
    }];
}