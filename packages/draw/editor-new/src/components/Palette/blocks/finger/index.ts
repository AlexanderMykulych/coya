import { defineAsyncComponent } from 'vue';
import type { PaletteAction } from '../../../../core/types';
import { EditorMode, PaletteItemType } from '../../../../core/types';

export default <PaletteAction>{
    name: 'finger',
    paletteComponent: defineAsyncComponent(() => import('./fingerPalette.vue')),
    type: PaletteItemType.Action,
    action: ({ editorState }) => {
        editorState.mode = EditorMode.None;
    },
};
