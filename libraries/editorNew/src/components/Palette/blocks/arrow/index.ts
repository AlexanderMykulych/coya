import { defineAsyncComponent } from 'vue';
import type { PaletteAction } from '../../../../core/types';
import { EditorMode, PaletteItemType } from '../../../../core/types';

export default <PaletteAction>{
    name: 'arrow',
    paletteComponent: defineAsyncComponent(() => import('./arrowPalette.vue')),
    type: PaletteItemType.Action,
    action: ({ editorState }) => {
        editorState.mode = EditorMode.Arrow;
    },
};
