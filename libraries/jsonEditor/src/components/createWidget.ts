import * as monaco from 'monaco-editor';
import { WidgetChangeCallback, WidgetConfig } from './WidgetConfig';
import { createZoneWidget } from './createZoneWidget';
import { createCommonWidget } from './createCommonWidget';

export const createWidget = (
    editor: monaco.editor.IStandaloneCodeEditor,
    widgetConfig: WidgetConfig,
    onValueChange: WidgetChangeCallback,
    asViewZone: boolean = false) => {
    
    if (asViewZone) {
        createZoneWidget(editor, widgetConfig, onValueChange);
    } else {
        createCommonWidget(widgetConfig, onValueChange, editor);
    }
};
