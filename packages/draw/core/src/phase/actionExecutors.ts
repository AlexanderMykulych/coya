/* eslint-disable */
import type { ActionList } from '../types';
import { ActionType } from '../types';
import { addHighlightActionExecutor } from './addHighlightActionExecutor';
import { addNewBlockActionDebugger, addNewBlockActionExecutor, addNewBlockBlockRenamer } from './addNewBlockActionExecutor';
import { changeBlockPositionActionExecutor } from './changeBlockPositionActionExecutor';
import { changeLabelActionDebugger, changeLabelActionExecutor } from './changeLabelActionExecutor';
import { connectActionDebugger, connectActionExecutor, connectBlockRenamer } from './connectActionExecutor';
import { hideBlocksActionDebugger, hideBlocksActionExecutor } from './hideBlocksActionExecutor';
import { removeHighlightActionExecutor } from './removeHighlightActionExecutor';
import { changeBlockStyleExecutor } from './changeBlockStyleExecutor';
import { showActionExecutor, showBlockRenamer } from './showActionExecutor';
import { hideActionExecutor } from './hideActionExecutor';

export const actionExecutors: ActionList = [
    {
        type: ActionType.Connect,
        executor: connectActionExecutor,
        debugger: connectActionDebugger,
        blockRenamer: connectBlockRenamer,
    }, {
        type: ActionType.AddNewBlock,
        executor: addNewBlockActionExecutor,
        debugger: addNewBlockActionDebugger,
        blockRenamer: addNewBlockBlockRenamer,
    }, {
        type: ActionType.ChangePosition,
        executor: changeBlockPositionActionExecutor,
    }, {
        type: ActionType.ChangeLabel,
        executor: changeLabelActionExecutor,
        debugger: changeLabelActionDebugger,
    }, {
        type: ActionType.Highlight,
        executor: addHighlightActionExecutor,
    }, {
        type: ActionType.RemoveHighlight,
        executor: removeHighlightActionExecutor,
    }, {
        type: ActionType.HideBlock,
        executor: hideBlocksActionExecutor,
        debugger: hideBlocksActionDebugger,
    }, {
        type: ActionType.ChangeBlockStyle,
        executor: changeBlockStyleExecutor,
    }, {
        type: ActionType.Show,
        executor: showActionExecutor,
        blockRenamer: showBlockRenamer,
    },
];
