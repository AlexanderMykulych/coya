import { ArchitectureDescription, BlockElementType, LineBlockElementDescription } from "../../descriptionTypes";
import { isNotNullOrUndefined } from "../../typeGuards";
import { TreePositioningStrategy, PositioningDefaults } from "./positioning";
import Hierarchy from "@antv/hierarchy";


export function generateTree(
    arch: ArchitectureDescription,
    strategy: TreePositioningStrategy,
    defaults: Partial<PositioningDefaults>
) {
    const tree: any = {};
    const edges = Object.entries(arch.blocks)
        .filter(([_, val]) => val?.type === BlockElementType.Line)
        .map(([_, val]) => val)
        .filter(isNotNullOrUndefined) as LineBlockElementDescription[];

    const treeBuilder = (id: string) => {
        if (!tree[id]) {
            tree[id] = { id };
        }
        const item = tree[id];
        const children = edges
            .filter(x => x.from === id)
            .map(x => {
                if (!tree[x.to] && !!arch.blocks[x.to]) {
                    return treeBuilder(x.to);
                }
            })
            .filter(isNotNullOrUndefined);
        item.children = children;
        return item;
    };

    const root = treeBuilder(Object.keys(arch.blocks)?.[0]);
    const layoutConfig = defaults.layout;
    switch (strategy) {
        case "Dendrogram":
            return Hierarchy.dendrogram(root, layoutConfig);
            break;
        case "Indented":
            return Hierarchy.indented(root, layoutConfig);
            break;
        case "Mindmap":
            return Hierarchy.mindmap(root, layoutConfig);
            break;
        case "CompactBox":
        default:
            return Hierarchy.compactBox(root, layoutConfig);
            break;
    }
}
