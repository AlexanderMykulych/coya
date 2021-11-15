export const PaletteBlocks = Object
    .values(import.meta.globEager('./blocks/**/*.ts'))
    .map(x => x.default) as PaletteItem[];


export enum PaletteItemType {
    Block = "block",
    Action = "action"
}
export interface BasePaletteItem {
    name: string;
    paletteComponent: () => Promise<typeof import("*.vue")>;
    type?: PaletteItemType;
}
export interface PaletteBlock extends BasePaletteItem {
    type: PaletteItemType.Block | undefined;
    preview: {
        component: () => Promise<typeof import("*.vue")>,
        width?: number | string;
        height?: number | string;
    };
}

export interface PaletteAction extends BasePaletteItem {
    type: PaletteItemType.Action;

}
export type PaletteItem = PaletteBlock | PaletteAction;