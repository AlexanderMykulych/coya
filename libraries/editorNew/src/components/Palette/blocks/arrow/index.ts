import { defineAsyncComponent } from "vue";
import { PaletteItemType } from "./../../PaletteBlocks";

export default {
    name: "arrow",
    paletteComponent: defineAsyncComponent(() => import("./arrowPalette.vue")),
    type: PaletteItemType.Action
};