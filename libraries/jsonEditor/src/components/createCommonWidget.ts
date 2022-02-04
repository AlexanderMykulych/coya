import * as monaco from 'monaco-editor';
import { watch } from 'vue';
import type { WidgetConfig } from './WidgetConfig';
import { WidgetChangeCallback } from './WidgetConfig';
import { createVueDomElement } from './createVueDomElement';

export function createCommonWidget(widgetConfig: WidgetConfig, editor: monaco.editor.IStandaloneCodeEditor) {
    const dom = createVueDomElement();
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

    watch(() => widgetConfig, (value) => {
        const config = createMonacoConfig(value);
        editor.layoutContentWidget(config);
    }, {
        deep: true,
    });

    editor.addContentWidget(initConfig);
    return dom;
}
