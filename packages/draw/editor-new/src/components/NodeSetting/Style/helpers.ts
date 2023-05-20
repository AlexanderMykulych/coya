import { isNullOrUndefined } from 'coya-util';
import { defineAsyncComponent } from 'vue';

export const helpers = [{
    label: 'Fill color',
    canHelp: (css: Record<string, any>) => isNullOrUndefined(css?.fill) || css?.fill === 'none',
    applyHelp: (css: Record<string, any>) => ({
        ...css,
        fill: '#83c683ff',
    }),
}, {
    label: 'Fill style',
    canHelp: () => true,
    applyHelp: (css: Record<string, any>) => ({
        ...css,
        fillStyle: 'solid',
    }),
    component: defineAsyncComponent(() => import('./FillStyleHelper.vue')),
}, {
    label: 'Text align',
    canHelp: () => true,
    applyHelp: (css: Record<string, any>) => css,
    component: defineAsyncComponent(() => import('./TextAlignHelper.vue')),
}, {
    label: 'Text color',
    canHelp: (css: Record<string, any>) => isNullOrUndefined(css?.color),
    applyHelp: (css: Record<string, any>) => ({
        ...css,
        color: '',
    }),
}, {
    label: 'Only text',
    canHelp: (css: Record<string, any>) => css?.stroke !== 'none' && css?.fill !== 'none',
    applyHelp: (css: Record<string, any>) => ({
        ...css,
        stroke: 'none',
        fill: 'none',
    }),
}, {
    label: 'Border color',
    canHelp: (css: Record<string, any>) => isNullOrUndefined(css?.stroke) || css?.stroke === 'none',
    applyHelp: (css: Record<string, any>) => ({
        ...css,
        stroke: 'black',
    }),
}, {
    label: 'Font size',
    canHelp: (css: Record<string, any>) => isNullOrUndefined(css?.fontSize),
    applyHelp: (css: Record<string, any>) => ({
        ...css,
        fontSize: '50',
    }),
}, {
    label: 'Auto font size',
    canHelp: (css: Record<string, any>) => css?.text?.fontSize !== 'auto',
    applyHelp: (css: Record<string, any>) => ({
        ...css,
        fontSize: undefined,
        text: {
            fontSize: 'auto',
        },
    }),
}];
