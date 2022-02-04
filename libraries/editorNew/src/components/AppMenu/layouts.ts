import type { PositioningDefaults, PositioningStrategy } from 'coya-core';
export interface LayoutConfig {
    name: string
    type: PositioningStrategy
    config: Partial<PositioningDefaults>
}
const dagreDef = {
    ranksep: 100,
    nodesep: 100,
    workerEnabled: true,
};
const treeDef = {
    getHeight: function getHeight() {
        return 200;
    },
    getWidth: function getWidth() {
        return 500;
    },
    getVGap: function getVGap() {
        return 50;
    },
    getHGap: function getHGap() {
        return 100;
    },
};
export const layouts: LayoutConfig[] = [{
    name: 'dagre1',
    type: 'Dagre',
    config: {
        layout: {
            ...dagreDef,
        },
    },
}, {
    name: 'dagre2',
    type: 'Dagre',
    config: {
        layout: {
            ...dagreDef,
            rankdir: 'LR',
        },
    },
}, {
    name: 'grid',
    type: 'Grid',
    config: {
        layout: {
            ...dagreDef,
            preventOverlap: true,
            nodeSize: 550,
        },
    },
}, {
    name: 'CompactBox',
    type: 'CompactBox',
    config: {
        layout: {
            ...treeDef,
        },
    },
}, {
    name: 'Dendrogram',
    type: 'Dendrogram',
    config: {
        layout: {
            ...treeDef,
        },
    },
}, {
    name: 'Indented',
    type: 'Indented',
    config: {
        layout: {
            ...treeDef,
        },
    },
}, {
    name: 'Mindmap',
    type: 'Mindmap',
    config: {
        layout: {
            ...treeDef,
        },
    },
}, {
    name: 'Random',
    type: 'Random',
    config: {
        layout: {
            width: 3000,
            height: 3000,
        },
    },
}];
