import { reactive } from 'vue';
import type { ConfigureEditorOption, JsonAstRow } from './WidgetConfig';
import { analizeAst } from './analizeAst';
import { getAndApplyConfig } from './getAndApplyConfig';

export function configureEditor({ editor, widgetConfig }: ConfigureEditorOption) {
    const getAndApplyConfigLoc = (row: JsonAstRow, index: number) => getAndApplyConfig(editor, row, index, widgetConfig);
    const analizingResult = reactive(analizeAst(editor.getValue()));

    const configs = ref(
        analizingResult.rows
            ?.map((x, index) => getAndApplyConfigLoc(x, index))
            .filter(x => !!x),
    );

    editor.onDidChangeModelContent((_) => {
        if (editor._savingByWidget)
            return;

        const { ast, rows: result } = analizeAst(editor.getValue());
        analizingResult.ast = ast;
        analizingResult.rows = result;

        analizingResult.rows?.forEach((x, index) => {
            if (configs.value.length <= index) {
                const res = getAndApplyConfigLoc(x, index);
                if (!res)
                    return;

                configs.value.push(res);
            }
            const { config } = configs.value[index];
            config.row = x;
            // if (config.position.column !== x.end.column + 1 || config.position.lineNumber !== x.start.line) {
            // }
        });
        if (configs.value.length > analizingResult.rows.length) {
            configs.value
                .slice(analizingResult.rows.length)
                .forEach(x => x!.config.row = undefined);
        }
    });
    return {
        analizingResult,
        configs,
    };
}
