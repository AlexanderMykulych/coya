import { ActionList, ActionType } from "../types";
import { addHighlightActionExecutor } from "./addHighlightActionExecutor";
import { addNewBlockActionDebugger, addNewBlockActionExecutor } from "./addNewBlockActionExecutor";
import { changeBlockPositionActionExecutor } from "./changeBlockPositionActionExecutor";
import { changeLabelActionDebugger, changeLabelActionExecutor } from "./changeLabelActionExecutor";
import { connectActionDebugger, connectActionExecutor } from "./connectActionExecutor";
import { removeHighlightActionExecutor } from "./removeHighlightActionExecutor";

export const actionExecutors: ActionList = [{
    type: ActionType.Connect,
    executor: connectActionExecutor,
    debugger: connectActionDebugger
}, {
    type: ActionType.AddNewBlock,
    executor: addNewBlockActionExecutor,
    debugger: addNewBlockActionDebugger
}, {
    type: ActionType.ChangePosition,
    executor: changeBlockPositionActionExecutor
}, {
    type: ActionType.ChangeLabel,
    executor: changeLabelActionExecutor,
    debugger: changeLabelActionDebugger
}, {
    type: ActionType.Highlight,
    executor: addHighlightActionExecutor
}, {
    type: ActionType.RemoveHighlight,
    executor: removeHighlightActionExecutor
}];