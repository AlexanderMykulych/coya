import * as monaco from 'monaco-editor'
import { ref, reactive } from 'vue'
import { JsonAstRow, WidgetConfig } from './WidgetConfig'
import { createWidget } from './createWidget'
import { analizeAst } from "./analizeAst"

export function configureEditor(editor: monaco.editor.IStandaloneCodeEditor) {
    const rows = analizeAst(editor.getValue())
    const configs = rows.map((x, index) => getAndApplyConfig(editor, x, index));

    editor.onDidChangeModelContent(_ => {
        const newRows = analizeAst(editor.getValue());
        newRows.forEach((x, index) => {
            if (configs.length <= index) {
                configs.push(getAndApplyConfig(editor, x, index));
            }
            const oldConfig = configs[index];
            if (oldConfig.position.column !== x.end.column + 1 || oldConfig.position.lineNumber !== x.start.line) {
                oldConfig.row = x;
            }
        })
    })
}

function getAndApplyConfig(editor: monaco.editor.IStandaloneCodeEditor, row: JsonAstRow, index: number) {
    const config: WidgetConfig = reactive<WidgetConfig>({
        row,
        position: {
            column: computed(() => config.row.end.column + 1) as any,
            lineNumber: computed(() => config.row.start.line) as any,
        },
        path: computed(() => config.row.path) as any,
        id: `widget_${index}`,
        index,
    })
    createWidget(editor, config, ({ value }) => {
        const obj = JSON.parse(editor.getValue());
        if (obj) {
            setToValue(obj, value, config.row.path);
            editor.setValue(JSON.stringify(obj, null, '\t'));
        }
    })
    return config
}

function setToValue(obj: any, value: any, path: string) {
    let i = 0;
    const paths = path.split('.');
    for (i = 0; i < paths.length - 1; i++)
        obj = obj[paths[i]];

    obj[paths[i]] = value;
}
