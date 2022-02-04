import type { PaletteItem } from '../../core/types';

export const PaletteBlocks = Object
    .values(import.meta.globEager('./blocks/**/*.ts'))
    .map(x => x.default) as PaletteItem[];
