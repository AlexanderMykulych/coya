import * as monaco from 'monaco-editor';
import { reactive } from 'vue';
import { ConfigureEditorOption, JsonAstRow, WidgetConfig, WidgetFilterConfig } from './WidgetConfig';
import { createWidget } from './createWidget';
import { analizeAst } from "./analizeAst";

export function configureEditor({ editor, widgetConfig }: ConfigureEditorOption) {
    const getAndApplyConfigLoc = (row: JsonAstRow, index: number) => getAndApplyConfig(editor, row, index, widgetConfig);
    const analizingResult = reactive(analizeAst(editor.getValue()));
    
    const configs = ref(analizingResult
        .rows
        ?.map((x, index) => getAndApplyConfigLoc(x, index))
        .filter(x => !!x)
    );

    editor.onDidChangeModelContent(_ => {
        const { ast, rows: result } = analizeAst(editor.getValue());
        analizingResult.ast = ast;
        analizingResult.rows = result;
        analizingResult.rows?.forEach((x, index) => {
            if (configs.value.length <= index) {
                const res = getAndApplyConfigLoc(x, index);
                if (!res) {
                    return;
                }
                configs.value.push(res);
            }
            const { config } = configs.value[index];
            if (config.position.column !== x.end.column + 1 || config.position.lineNumber !== x.start.line) {
                config.row = x;
            }
        })
    });
    return {
        analizingResult,
        configs
    };
}

function getAndApplyConfig(
    editor: monaco.editor.IStandaloneCodeEditor,
    row: JsonAstRow,
    index: number,
    widgetFilterConfig?: WidgetFilterConfig,
) {
    if (!widgetFilterConfig?.activateDefaultWidget) {
        return;
    }
    const config: WidgetConfig = reactive<WidgetConfig>({
        row,
        position: {
            column: computed(() => 100) as any,
            lineNumber: computed(() => config.row.start.line) as any,
        },
        path: computed(() => config.row.path) as any,
        id: `widget_${index}`,
        index,
    })
    const {sideDom, zoneDom} = createWidget(editor, config, widgetFilterConfig)
    return {
        config,
        sideDom,
        zoneDom,
        onValueChange: (value) => {
            const obj = JSON.parse(editor.getValue());
            if (obj) {
                config.row.value = value;
                setToValue(obj, value, config.row.path);
                editor.setValue(JSON.stringify(obj, null, '\t'));
            }
        }
    };
}

function setToValue(obj: any, value: any, path: string) {
    let i = 0;
    const paths = path.split('.');
    for (i = 0; i < paths.length - 1; i++) {
        if (obj !== null && obj !== undefined) {
            obj = obj[paths[i]];
        }
    }

    obj[paths[i]] = value;
}
