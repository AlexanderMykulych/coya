import { ActionList, ActionType } from "../types";
import { addHighlightActionExecutor } from "./addHighlightActionExecutor";
import { addNewBlockActionDebugger, addNewBlockActionExecutor } from "./addNewBlockActionExecutor";
import { changeBlockPositionActionExecutor } from "./changeBlockPositionActionExecutor";
import { changeLabelActionDebugger, changeLabelActionExecutor } from "./changeLabelActionExecutor";
import { connectActionDebugger, connectActionExecutor, connectBlockRenamer } from "./connectActionExecutor";
import { hideBlocksActionDebugger, hideBlocksActionExecutor } from "./hideBlocksActionExecutor";
import { removeHighlightActionExecutor } from "./removeHighlightActionExecutor";
import { changeBlockStyleExecutor } from "./changeBlockStyleExecutor";

export const actionExecutors: ActionList = [{
    type: ActionType.Connect,
    executor: connectActionExecutor,
    debugger: connectActionDebugger,
    blockRenamer: connectBlockRenamer,
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
}, {
    type: ActionType.HideBlock,
    executor: hideBlocksActionExecutor,
    debugger: hideBlocksActionDebugger
}, {
    type: ActionType.ChangeBlockStyle,
    executor: changeBlockStyleExecutor
}];