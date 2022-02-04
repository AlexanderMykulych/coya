import type * as monaco from 'monaco-editor';
import type { WidgetConfig, WidgetFilterConfig } from './WidgetConfig';
import { createZoneWidget } from './createZoneWidget';
import { createCommonWidget } from './createCommonWidget';

export const createWidget = (
    editor: monaco.editor.IStandaloneCodeEditor,
    widgetConfig: WidgetConfig,
    widgetFilterConfig: WidgetFilterConfig,
) => {
    return {
        zoneDom: createZoneWidget(editor, widgetConfig, widgetFilterConfig),
        sideDom: createCommonWidget(widgetConfig, editor),
    };
};
