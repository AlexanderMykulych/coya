import { Action, Change, ChangeOwnerType, ChangeType } from "../types";

export function removeHighlightActionExecutor(phaseId: number, _: Action): Change[] | null {
    return [{
        type: ChangeType.RemoveBlock,
        setting: {
        },
        owner: {
            type: ChangeOwnerType.Phase,
            phaseId
        }
    }];
}
