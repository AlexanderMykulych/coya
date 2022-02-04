import ColorWidget from './ColorWidget.vue';

export const widgetMaping = [{
    path: /css\.fill/,
    component: ColorWidget,
}, {
    path: /css\..*color/,
    component: ColorWidget,
}, {
    path: /css\.stroke$/,
    component: ColorWidget,
}];
