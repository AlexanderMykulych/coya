import { ArchitectureDescription, BlockElementType } from "../../descriptionTypes";
import { CircularLayout, DagreLayout, Edge, GridLayout, Model, Node, OutModel, RandomLayout } from "@antv/layout";

export type GraphPositioningStrategy = "Dagre" | "Random" | "Circular" | "Grid";
export type TreePositioningStrategy = "Tree" | "RTree";
export type PositioningStrategy = GraphPositioningStrategy | TreePositioningStrategy;
export function isTreeStrategy(strategy: PositioningStrategy): strategy is TreePositioningStrategy {
    switch (strategy) {
        case "Tree":
        case "RTree":
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

//@ts-ignore
export function applyTreePositioning(arch: ArchitectureDescription, strategy: TreePositioningStrategy, defaults: PositioningDefaults) {
    throw new Error("Function not implemented.");
}
export function applyGraphPositioning(arch: ArchitectureDescription, strategy: GraphPositioningStrategy, defaults: PositioningDefaults) {
    let layout: any = null;
    switch (strategy) {
        case "Dagre":
            layout = new DagreLayout({
                type: "dagre",
                nodeSize: defaults.blockW,
                ...(defaults.layout || {}),
            });
            break;
        case "Circular":
            layout = new CircularLayout({
                type: "circular",
                ...(defaults.layout || {}),
            })
            break;
        case "Grid":
            layout = new GridLayout({
                type: "grid",
                ...(defaults.layout || {}),
            })
            break;
        default:
            layout = new RandomLayout({
                type: "random",
                ...(defaults.layout || {}),
            });
    }
    const data = coyaToG6(arch)
    const result = layout.layout(data) as OutModel;
    applyG6ToCoya(result, arch, defaults);
}

export function coyaToG6(arch: ArchitectureDescription): Model {
    const nodes: Node[] = [];
    const edges: Edge[] = [];
    Object.entries(arch.blocks)
        .map(([id, val]) => {
            if (!!val && val.type === BlockElementType.Line) {
                if (arch.blocks[val.from] && arch.blocks[val.to]) {
                    edges.push({
                        source: val.from,
                        target: val.to,
                    });
                }
            } else {
                nodes.push({ id });
            }
        });
    return {
        nodes,
        edges,
    };
}
export function applyG6ToCoya(g6Model: OutModel, arch: ArchitectureDescription, defaults: PositioningDefaults) {
    const blocks = arch.style!.blocks!;
    g6Model.nodes?.forEach(x => {
        if (!blocks[x.id]) {
            blocks[x.id] = {};
        }
        blocks[x.id].position = {
            x: `${x.x}`,
            y: `${x.y}`,
            w: `${defaults.blockW}`,
            h: `${defaults.blockH}`,
        };
    });
}
