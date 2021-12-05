import { createApp } from 'vue';
import { WidgetChangeCallback, WidgetConfig } from './WidgetConfig';
import wrapperWidget from './widgets/wrapperWidget.vue';

export function createVueDomElement(widgetConfig: WidgetConfig, onValueChange: WidgetChangeCallback, props?: any) {
    const dom = document.createElement('div');
    dom.style.width = "100%";
    const app = createApp(wrapperWidget, {
        widgetConfig,
        onValueChange: (value: any) => onValueChange({ value }),
        ...(props || {})
    });
    Object.values(import.meta.globEager('./../modules/*.ts')).map(i => i.install?.({
        app,
        isClient: false,
        initialState: {},
    }));
    app.mount(dom);
    return dom;
}
