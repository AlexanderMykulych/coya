import FillStyleWidget from './FillStyleWidget.vue';

const colorWidgetAsync = defineAsyncComponent(() => import('./ColorWidget.vue'));
export const widgetMaping = [{
    path: /css\.fill$/,
    component: colorWidgetAsync,
}, {
    path: /css\.fillStyle$/,
    component: FillStyleWidget,
}, {
    path: /css\..*color/,
    component: colorWidgetAsync,
}, {
    path: /css\.stroke$/,
    component: colorWidgetAsync,
}];
