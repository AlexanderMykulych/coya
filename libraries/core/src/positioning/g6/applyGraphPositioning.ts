import { ArchitectureDescription, BlockElementType } from "../../descriptionTypes";
import * as layout  from "@antv/layout/dist/layout.min.js";
import { Edge, Model, Node, OutModel } from "@antv/layout";
import { GraphPositioningStrategy, PositioningDefaults } from "./positioning";
const { CircularLayout, DagreLayout, GridLayout, RandomLayout } = layout;
export function applyGraphPositioning(arch: ArchitectureDescription, strategy: GraphPositioningStrategy, defaults: PositioningDefaults) {
    let layout: any = null;
    switch (strategy) {
        case "Dagre":
            layout = new DagreLayout({
                type: "dagre",
                nodeSize: defaults.blockW,
                ...(defaults.layout || {})
            });
            break;
        case "Circular":
            layout = new CircularLayout({
                type: "circular",
                ...(defaults.layout || {})
            });
            break;
        case "Grid":
            layout = new GridLayout({
                type: "grid",
                ...(defaults.layout || {})
            });
            break;
        default:
            layout = new RandomLayout({
                type: "random",
                ...(defaults.layout || {})
            });
    }
    const data = coyaToG6(arch);
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
                        target: val.to
                    });
                }
            } else {
                nodes.push({ id });
            }
        });
    return {
        nodes,
        edges
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
            h: `${defaults.blockH}`
        };
    });
}
