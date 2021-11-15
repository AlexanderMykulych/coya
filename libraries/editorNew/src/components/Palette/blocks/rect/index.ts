import { defineAsyncComponent } from "vue";
import { PaletteBlock } from "../../../../core/types";

export default <PaletteBlock>{
    name: "rect",
    paletteComponent: defineAsyncComponent(() => import("./rectPalette.vue")),
    preview: {
        component: defineAsyncComponent(() => import("./rectPalette.vue")),
        width: 100,
        height: 100
    },
};