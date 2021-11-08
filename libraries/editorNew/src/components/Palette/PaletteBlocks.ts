export const PaletteBlocks = Object
    .values(import.meta.globEager('./blocks/**/*.ts'))
    .map(x => x.default) as PaletteBlock[];

export interface PaletteBlock {
    name: string;
    paletteComponent: () => Promise<typeof import("*.vue")>,
    preview: {
        component: () => Promise<typeof import("*.vue")>,
        width?: number | string;
        height?: number | string;
    },
}