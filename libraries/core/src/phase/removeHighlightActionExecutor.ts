import { Change, ChangeType } from "../types";

export function removeHighlightActionExecutor(): Change[] | null {
    return [{
        type: ChangeType.RemoveBlock,
        setting: {
        }
    }];
}
