import { Block } from "../types";

export interface AutoPositioningSetting {
    blocks: Block[];
    sizeSetting?: AutoPositioningSizeSetting;
}

export interface AutoPositioningSizeSetting {
    rectHeight: number;
    rectWidth: number;
    parentChildrenInRowCount: number;
    gap: number;
}