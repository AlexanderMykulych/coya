import type { TransformSetting } from '..';
import type { ArchitectureDescription } from '../descriptionTypes';
import type { Block } from '../types';

export interface AutoPositioningSetting {
    blocks: Block[]
    sizeSetting?: AutoPositioningSizeSetting
    architectureDescription: ArchitectureDescription
    setting: TransformSetting
}

export interface AutoPositioningSizeSetting {
    rectHeight: number
    rectWidth: number
    parentChildrenInRowCount: number
    gap: number
}
