import { ArchitectureDescription, BlockStyle } from "../descriptionTypes";
import {
    AddBlockChangeSetting,
    Change, ChangeBlockStyleSetting,
    ChangeType, RemoveBlocksSetting
} from "../types";
import { deepAssign } from "../util/deepAssign";

export function makeChange(architecture: ArchitectureDescription, change: Change): void {
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
