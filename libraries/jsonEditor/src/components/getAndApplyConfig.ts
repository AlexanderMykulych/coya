import type * as monaco from 'monaco-editor';
import { reactive } from 'vue';
import { setValueByPath } from 'coya-util';
import type { JsonAstRow, WidgetConfig, WidgetFilterConfig } from './WidgetConfig';
import { createWidget } from './createWidget';

export function getAndApplyConfig(
    editor: monaco.editor.IStandaloneCodeEditor,
    row: JsonAstRow,
    index: number,
    widgetFilterConfig?: WidgetFilterConfig) {
    if (!widgetFilterConfig?.activateDefaultWidget)
        return;

    const config: WidgetConfig = reactive<WidgetConfig>({
        row,
        position: {
            column: computed(() => 100) as any,
            lineNumber: computed(() => config.row?.start.line) as any,
        },
        path: computed(() => config.row?.path) as any,
        id: `widget_${index}`,
        index,
    });
    const { sideDom, zoneDom } = createWidget(editor, config, widgetFilterConfig);
    return {
        config,
        sideDom,
        zoneDom,
        onValueChange: (value) => {
            const obj = JSON.parse(editor.getValue());
            if (obj && config.row) {
                config.row.value = value;
                setValueByPath(obj, value, config.row.path);
                editor._savingByWidget = true;
                editor.setValue(JSON.stringify(obj, null, '\t'));
                editor._savingByWidget = false;
            }
        },
    };
}
