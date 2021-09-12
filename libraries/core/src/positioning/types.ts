import { TransformSetting } from "..";
import { ArchitectureDescription } from "../descriptionTypes";
import { Block } from "../types";

export interface AutoPositioningSetting {
    blocks: Block[];
    sizeSetting?: AutoPositioningSizeSetting;
    architectureDescription: ArchitectureDescription;
    setting: TransformSetting;
}

export interface AutoPositioningSizeSetting {
    rectHeight: number;
    rectWidth: number;
    parentChildrenInRowCount: number;
    gap: number;
}