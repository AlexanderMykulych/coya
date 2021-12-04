import * as monaco from 'monaco-editor';
import { createApp, watch } from 'vue';
import { WidgetChangeCallback, WidgetConfig } from './WidgetConfig';
import testWidget from './widgets/testWidget.vue';
import formulaWidget from './widgets/formulaWidget.vue';

export const createWidget = (
    editor: monaco.editor.IStandaloneCodeEditor,
    widgetConfig: WidgetConfig,
    onValueChange: WidgetChangeCallback) => {
    const dom = document.createElement('div');
    const app = createApp(formulaWidget, {
        widgetConfig,
        onValueChange: (value: any) => onValueChange({ value }),
    });
    Object.values(import.meta.globEager('./../modules/*.ts')).map(i => i.install?.({
        app,
        isClient: false,
        initialState: {},
    }))
    app.mount(dom);
    const createMonacoConfig = (widgetConfig: WidgetConfig) => ({
        getId() {
            return widgetConfig.id;
        },
        getDomNode() {
            return dom;
        },
        getPosition() {
            return {
                position: widgetConfig.position,
                preference: [
                    monaco.editor.ContentWidgetPositionPreference.EXACT,
                ],
            };
        },
    });

    const initConfig = createMonacoConfig(widgetConfig);

    watch(() => widgetConfig, value => {
        const config = createMonacoConfig(value);
        editor.layoutContentWidget(config);
    }, {
        deep: true,
    });

    editor.addContentWidget(initConfig);
};
