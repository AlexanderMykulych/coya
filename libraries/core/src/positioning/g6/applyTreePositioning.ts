/* eslint-disable */
import type { ArchitectureDescription } from '../../descriptionTypes';
import type { PositioningDefaults, TreePositioningStrategy } from './positioning';
import { generateTree } from './generateTree';

// @ts-expect-error
export function applyTreePositioning(
    arch: ArchitectureDescription,
    strategy: TreePositioningStrategy,
    defaults: Partial<PositioningDefaults>,
) {
    const tree = generateTree(arch, strategy, defaults);
    applyG6TreeToCoya(arch, tree, defaults);
}

function applyG6TreeToCoya(arch: ArchitectureDescription, tree: any, defaults: Partial<PositioningDefaults>) {
    const blocks = arch.style?.blocks!;
    const applier = (item: any) => {
        if (item.id !== '__root') {
            if (!blocks[item.id])
            blocks[item.id] = {};
            
            blocks[item.id].position = {
                x: `${item.x}`,
                y: `${item.y}`,
                w: `${defaults.blockW}`,
                h: `${defaults.blockH}`,
            };
        }
        item.children?.forEach(applier);
    };
    applier(tree);
}
