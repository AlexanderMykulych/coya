const colorWidgetAsync = defineAsyncComponent(() => import('./ColorWidget.vue'));
export const widgetMaping = [{
    path: /css\.fill$/,
    component: colorWidgetAsync,
}, {
    path: /css\.fillStyle$/,
    component: defineAsyncComponent(() => import('./FillStyleWidget.vue')),
}, {
    path: /css\..*color/,
    component: colorWidgetAsync,
}, {
    path: /css\.stroke$/,
    component: colorWidgetAsync,
}];
