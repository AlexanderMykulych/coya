import { PositioningDefaults, PositioningStrategy } from "coya-core";
export interface LayoutConfig {
    name: string;
    type: PositioningStrategy;
    config: Partial<PositioningDefaults>;
}
const dagreDef = {
    ranksep: 100,
    nodesep: 100,
    workerEnabled: true,
}
export const layouts: LayoutConfig[] = [{
    name: "dagre1",
    type: "Dagre",
    config: {
        layout: {
            ...dagreDef
        }
    }
}, {
    name: "dagre2",
    type: "Dagre",
    config: {
        layout: {
            ...dagreDef,
            rankdir: "LR",
        }
    }
}, {
    name: "grid",
    type: "Grid",
    config: {
        layout: {
            ...dagreDef,
            preventOverlap: true,
            nodeSize: 550,
        }
    }
}, {
    name: "Random",
    type: "Random",
    config: {
        layout: {
            width: 3000,
            height: 3000,
        }
    }
}]