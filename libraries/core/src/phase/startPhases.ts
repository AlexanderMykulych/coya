import { ArchitectureDescription, BlockStyle } from "../descriptionTypes";
import { isNotNullOrUndefined } from "../typeGuards";
import { ActionExecutorContext, ActionType, AddBlockChangeSetting, Change, ChangeBlockStyleSetting, ChangeType, CurrentPhaseInfo, PhaseId, PhaseIndex, PhaseIndexItemAction } from "../types";
import { deepAssign } from "../util/deepAssign";
import { addHighlightActionExecutor } from "./addHighlightActionExecutor";
import { addNewBlockActionExecutor } from "./addNewBlockActionExecutor";
import { changeBlockPositionActionExecutor } from "./changeBlockPositionActionExecutor";
import { changeLabelActionExecutor } from "./changeLabelActionExecutor";
import { connectActionExecutor } from "./connectActionExecutor";

export function startPhases(architecture: ArchitectureDescription, phaseIndex: PhaseIndex, phaseInfo: CurrentPhaseInfo): PhaseId {
    const indexItems = phaseIndex.getPhaseById(phaseInfo.current);
    if (indexItems) {
        return indexItems.map(indexItem => {
            const actionContext = <ActionExecutorContext>{
                indexItem,
                architecture,
                phaseIndex
            };
            var changes = indexItem.actions.flatMap(item => executePhaseIndex(item, actionContext));
            changes
                .filter(isNotNullOrUndefined)
                .forEach(change => makeChange(architecture, change));
            return indexItem.nextPhaseId;
        });
    }
    return null;
}


function executePhaseIndex(item: PhaseIndexItemAction, context: ActionExecutorContext): Change[] | null {
    if (item.action.name === ActionType.Connect) {
        return connectActionExecutor(context, item.action);
    } else if (item.action.name === ActionType.AddNewBlock) {
        return addNewBlockActionExecutor(context, item.action);
    } else if (item.action.name === ActionType.ChangePosition) {
        return changeBlockPositionActionExecutor(context, item.action);
    } else if (item.action.name === ActionType.ChangeLabel) {
        return changeLabelActionExecutor(context, item.action);
    } else if (item.action.name === ActionType.Highlight) {
        return addHighlightActionExecutor(context, item.action);
    }
    throw "Not implemented!";
}

function makeChange(architecture: ArchitectureDescription, change: Change): void {
    if (change.type === ChangeType.AddNewBlock) {
        const setting = change.setting as AddBlockChangeSetting;
        if (setting) {
            architecture.blocks[setting.newBlockId] = setting.blockSettings;
        }
    } else if (change.type === ChangeType.ChangeStyle) {
        const setting = change.setting as ChangeBlockStyleSetting;
        if (setting && architecture.style?.blocks) {
            const currentSetting = architecture.style?.blocks?.[setting.blockId];
            if (currentSetting) {
                architecture.style.blocks[setting.blockId] = deepAssign<BlockStyle>({}, currentSetting, setting.newStyle);
            } else {
                architecture.style.blocks[setting.blockId] = deepAssign<BlockStyle>({}, setting.newStyle);
            }
        }
    } else {
        throw new Error("Function not implemented.");
    }
}