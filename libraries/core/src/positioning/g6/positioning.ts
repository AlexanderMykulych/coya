import { ArchitectureDescription } from "../../descriptionTypes";
import { applyGraphPositioning } from "./applyGraphPositioning";
import { applyTreePositioning } from "./applyTreePositioning";

export type GraphPositioningStrategy = "Dagre" | "Random" | "Circular" | "Grid";
export type TreePositioningStrategy = "CompactBox" | "Dendrogram" | "Indented" | "Mindmap";
export type PositioningStrategy = GraphPositioningStrategy | TreePositioningStrategy;
export function isTreeStrategy(strategy: PositioningStrategy): strategy is TreePositioningStrategy {
    switch (strategy) {
        case "CompactBox":
        case "Dendrogram":
        case "Indented":
        case "Mindmap":
            return true;
        default:
            return false;
    }
}
export interface PositioningDefaults {
    blockW: number;
    blockH: number;
    canvasW: number;
    canvasH: number;
    layout?: any;
    activeEl?: string;
}
const _defaults: PositioningDefaults = {
    blockW: 500,
    blockH: 250,
    canvasW: 3000,
    canvasH: 3000,
}

export function isGraphStrategy(strategy: PositioningStrategy): strategy is GraphPositioningStrategy {
    return !isTreeStrategy(strategy);
}

export const applyPositioning = (
    arch: ArchitectureDescription,
    strategy: PositioningStrategy,
    defaults?: PositioningDefaults
) => {
    defaults = {
        ..._defaults,
        ...(defaults || {})
    };

    if (isTreeStrategy(strategy)) {
        applyTreePositioning(arch, strategy, defaults);
    } else if (isGraphStrategy(strategy)) {
        applyGraphPositioning(arch, strategy, defaults);
    }
}
