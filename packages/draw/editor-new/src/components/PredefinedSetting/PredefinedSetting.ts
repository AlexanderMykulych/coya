/* eslint-disable */
export enum PredefCategory {
    Color = 'color',
    Shape = 'shape',
    Rough = 'rough',
}
export interface Predef {
    name: string
    label: string
    category: PredefCategory
    config: any
}
export interface PredefBlock extends Predef {
    item: any
}
export const predefinedSetting: Predef[] = [{
    name: 'red',
    label: 'Red',
    category: PredefCategory.Color,
    config: {
        css: {
            stroke: 'black',
            fill: 'red',
        },
    },
}, {
    name: 'yellow',
    label: 'Yellow',
    category: PredefCategory.Color,
    config: {
        css: {
            stroke: 'red',
            fill: 'yellow',
        },
    },
}, {
    name: 'green',
    label: 'Green',
    category: PredefCategory.Color,
    config: {
        css: {
            stroke: 'red',
            fill: 'green',
        },
    },
}, {
    name: 'solid',
    label: 'Solid',
    category: PredefCategory.Rough,
    config: {
        css: {
            fillStyle: 'solid',
        },
    },
}, {
    name: 'hachure',
    label: 'Hachure',
    category: PredefCategory.Rough,
    config: {
        css: {
            fillStyle: 'hachure',
        },
    },
}, {
    name: 'zigzag',
    label: 'Zigzag',
    category: PredefCategory.Rough,
    config: {
        css: {
            fillStyle: 'zigzag',
        },
    },
}, {
    name: 'cross-hatch',
    label: 'Cross Hatch',
    category: PredefCategory.Rough,
    config: {
        css: {
            fillStyle: 'cross-hatch',
        },
    },
}, {
    name: 'dots',
    label: 'Dots',
    category: PredefCategory.Rough,
    config: {
        css: {
            fillStyle: 'dots',
        },
    },
}, {
    name: 'sunburst',
    label: 'Sunburst',
    category: PredefCategory.Rough,
    config: {
        css: {
            fillStyle: 'sunburst',
        },
    },
}, {
    name: 'dashed',
    label: 'Dashed',
    category: PredefCategory.Rough,
    config: {
        css: {
            fillStyle: 'dashed',
        },
    },
}, {
    name: 'zigzag-line',
    label: 'Zigzag Line',
    category: PredefCategory.Rough,
    config: {
        css: {
            fillStyle: 'zigzag-line',
        },
    },
}, , {
        name: 'none',
        label: 'none',
        category: PredefCategory.Color,
        config: {
            css: {
                fill: 'none',
                stroke: 'none',
            },
        },
    }];
