import { ArchitectureDescription } from "../../descriptionTypes";
import { TreePositioningStrategy, PositioningDefaults } from "./positioning";
import { generateTree } from "./generateTree";

//@ts-ignore
export function applyTreePositioning(
    arch: ArchitectureDescription,
    strategy: TreePositioningStrategy,
    defaults: Partial<PositioningDefaults>
) {
    const tree = generateTree(arch, strategy, defaults);
    applyG6TreeToCoya(arch, tree, defaults);
}

function applyG6TreeToCoya(arch: ArchitectureDescription, tree: any, defaults: Partial<PositioningDefaults>) {
    const blocks = arch.style?.blocks!;
    const applier = (item: any) => {
        if (!blocks[item.id]) {
            blocks[item.id] = {};
        }
        blocks[item.id].position = {
            x: `${item.x}`,
            y: `${item.y}`,
            w: `${defaults.blockW}`,
            h: `${defaults.blockH}`
        };
        item.children?.forEach(applier);
    }
    applier(tree);
}