import ColorWidget from './ColorWidget.vue';
import FillStyleWidget from './FillStyleWidget.vue';

export const widgetMaping = [{
    path: /css\.fill$/,
    component: ColorWidget,
}, {
    path: /css\.fillStyle$/,
    component: FillStyleWidget,
}, {
    path: /css\..*color/,
    component: ColorWidget,
}, {
    path: /css\.stroke$/,
    component: ColorWidget,
}];
