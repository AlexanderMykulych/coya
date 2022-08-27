/* eslint-disable */
import { isNotNullOrUndefined } from 'coya-util';
import Hierarchy from '@antv/hierarchy';
import type { ArchitectureDescription, LineBlockElementDescription } from '../../descriptionTypes';
import { BlockElementType } from '../../descriptionTypes';
import type { PositioningDefaults, TreePositioningStrategy } from './positioning';

export function generateTree(
    arch: ArchitectureDescription,
    strategy: TreePositioningStrategy,
    defaults: Partial<PositioningDefaults>,
) {
    const tree: any = {};
    const edges = Object.entries(arch.blocks)
        .filter(([_, val]) => val?.type === BlockElementType.Line)
        .map(([_, val]) => val)
        .filter(isNotNullOrUndefined) as LineBlockElementDescription[];

    const treeBuilder = (id: string) => {
        if (!tree[id])
            tree[id] = { id };
        const item = tree[id];
        const children = edges
            .filter(x => x.from === id && x.to !== id)
            .map((x) => {
                if (!tree[x.to] && !!arch.blocks[x.to]) {
                    return treeBuilder(x.to);
                }
                return tree[x.to];
            })
            .filter(isNotNullOrUndefined);
        item.children = children;
        children.forEach(x => x.hasParent = true);
        return item;
    };

    const rootEls = defaults.activeEl ? [defaults.activeEl] :
        Object.entries(arch.blocks)
            .filter(([_, val]) => val?.type !== 'line')
            .map(([key]) => key);
    
    rootEls.forEach(treeBuilder)

  const roots = defaults.rootName
    ? Object.values(tree).filter((x: any) => x.id === defaults.rootName)
    : Object.values(tree)
      .filter((x: any) => !x.hasParent);

    let root;
    if (roots.length > 1) {
        const rootId = '__root';
        tree[rootId] = {
            id: rootId,
            children: roots,
        };
        root = tree[rootId];
    } else {
        root = roots[0];
    }
    const layoutConfig = defaults.layout;
    switch (strategy) {
        case 'Dendrogram':
            return Hierarchy.dendrogram(root, layoutConfig);
            break;
        case 'Indented':
            return Hierarchy.indented(root, layoutConfig);
            break;
        case 'Mindmap':
            return Hierarchy.mindmap(root, layoutConfig);
            break;
        case 'CompactBox':
        default:
            return Hierarchy.compactBox(root, layoutConfig);
            break;
    }
}
