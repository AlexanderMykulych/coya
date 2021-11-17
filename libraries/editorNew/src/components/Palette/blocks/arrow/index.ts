import { defineAsyncComponent } from "vue";
import { EditorMode, PaletteAction, PaletteItemType } from "../../../../core/types";

export default <PaletteAction>{
    name: "arrow",
    paletteComponent: defineAsyncComponent(() => import("./arrowPalette.vue")),
    type: PaletteItemType.Action,
    action: ({editorState}) => {
        editorState.mode = EditorMode.Arrow;
    }
};