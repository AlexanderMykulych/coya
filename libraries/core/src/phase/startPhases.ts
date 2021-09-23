import { ArchitectureDescription, BlockStyle } from "../descriptionTypes";
import { isNotNullOrUndefined } from "../typeGuards";
import {
    ActionExecutorContext, AddBlockChangeSetting,
    Change, ChangeBlockStyleSetting,
    ChangeType, CurrentPhaseInfo,
    PhaseId, PhaseIndex,
    PhaseIndexItemAction,
    RemoveBlocksSetting
} from "../types";
import { deepAssign } from "../util/deepAssign";
import { actionExecutors } from "./actionExecutors";

export function startPhases(architecture: ArchitectureDescription, phaseIndex: PhaseIndex, phaseInfo: CurrentPhaseInfo): PhaseId {
    const indexItem = phaseIndex.getNextPhaseById(phaseInfo.current);
    if (indexItem) {
        const actionContext = <ActionExecutorContext>{
            indexItem,
            architecture,
            phaseIndex
        };
        var changes = indexItem.actions.flatMap(item => executePhaseIndex(item, actionContext));
        changes
            .filter(isNotNullOrUndefined)
            .forEach(change => makeChange(architecture, change));
        return indexItem.phaseId;
    }
    return null;
}


function executePhaseIndex(item: PhaseIndexItemAction, context: ActionExecutorContext): Change[] | null {
    const action = actionExecutors
        .find(x => x.type === item.action.name)
    if (action) {
        return action.executor(context, item.action);
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
    } else if (change.type === ChangeType.RemoveBlock) {
        const setting = change.setting as RemoveBlocksSetting;
        setting.blocks.forEach(x => {
            delete architecture.blocks[x];
            delete architecture.style?.blocks?.[x];
        });

    } else {
        throw new Error("Function not implemented.");
    }
}