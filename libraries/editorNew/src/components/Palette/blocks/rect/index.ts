import { defineAsyncComponent } from "vue";

export default {
    name: "rect",
    paletteComponent: defineAsyncComponent(() => import("./rectPalette.vue")),
    preview: {
        component: defineAsyncComponent(() => import("./rectPalette.vue")),
        width: 100,
        height: 100
    },
};