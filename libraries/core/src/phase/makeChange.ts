import { ArchitectureDescription, BlockStyle } from "../descriptionTypes";
import { ChangeOwnerType } from "../types";
import { isNotNullOrUndefined } from "coya-util";
import {
    AddBlockChangeSetting,
    Change, ChangeBlockStyleSetting,
    ChangeType
} from "../types";
import { deepAssign } from "coya-util";
import { getRealBlockId } from "./getRealBlockId";

export function makeChange(architecture: ArchitectureDescription, change: Change): void {
    if (change.type === ChangeType.AddNewBlock) {
        const setting = change.setting as AddBlockChangeSetting;
        if (setting) {
            if (typeof setting.blockSettings === "string") {
                setting.blockSettings = {
                    label: setting.blockSettings
                };
            }
            architecture.blocks[setting.newBlockId] = {
                ...setting.blockSettings,
                sourcePhase: change.owner?.type === ChangeOwnerType.Phase ? change.owner.phaseId : undefined,
                sourcePhaseAction: change.owner?.type === ChangeOwnerType.Phase ? change.owner.actionIndex : undefined,
            };
        }
    } else if (change.type === ChangeType.ChangeStyle) {
        const setting = change.setting as ChangeBlockStyleSetting;
        if (setting && architecture.style?.blocks) {
            getRealBlockId(setting.blockId, architecture, (blockId) => {
                const currentSetting = architecture.style?.blocks?.[blockId];
                if (currentSetting) {
                    architecture.style.blocks[blockId] = deepAssign<BlockStyle>({}, currentSetting, setting.newStyle);
                } else {
                    architecture.style.blocks[blockId] = deepAssign<BlockStyle>({}, setting.newStyle);
                }
            })
        }
    } else if (change.type === ChangeType.RemoveBlock) {
        Object.keys(architecture.style?.blocks || {})
            .forEach(x => {
                if (architecture.style?.blocks?.[x].isHighlight) {
                    delete architecture.blocks[x];
                    delete architecture.style?.blocks?.[x];
                }
            });

    } else if (change.type === ChangeType.ChangePosition) {
        const currentSetting = architecture.style?.blocks?.[change.setting.blockId];
        if (!currentSetting) {
            return;
        }
        if (isNotNullOrUndefined(change.setting.x)) {
            currentSetting.position!.x = `${change.setting.x}`;
        }
        if (isNotNullOrUndefined(change.setting.y)) {
            currentSetting.position!.y = `${change.setting.y}`;
        }
        if (isNotNullOrUndefined(change.setting.w)) {
            currentSetting.position!.w = `${change.setting.w}`;
        }
        if (isNotNullOrUndefined(change.setting.h)) {
            currentSetting.position!.h = `${change.setting.h}`;
        }
    } else {
        throw new Error("Function not implemented.");
    }
}
