import { watch } from '@vue-reactivity/watch';
import { computed } from '@vue/reactivity';
import * as vscode from 'vscode';
import state from './state';
import * as ts from "typescript";
import { getTokensAtPosition, NodeWithIndex } from './tsutil/getTokensAtPosition';
import { PropertiesConfig } from "coya-core";
import { getNodeText } from './getNodeText';
import { createViteFileSymlink } from './createViteFileSymlink';

export function activateLogic(context: vscode.ExtensionContext, file: vscode.Uri) {
    createViteFileSymlink(context, file);
    watch(() => state.connectedCount, val => {
        vscode.window.showInformationMessage(`Connected: ${val}`);
    });
    const fileSource = computed(() => state.fileSources.find(x => x.fileName === file.path));
    vscode.window.onDidChangeTextEditorSelection(e => {
        const sourceFile = fileSource.value as ts.SourceFile;
        if (e.textEditor.document.fileName === file.path && sourceFile) {
            const position = e.textEditor.document.offsetAt(e.selections[0].start);
            const nodes = getTokensAtPosition(sourceFile, position);
            state.selectedProperties = {
                properties: propsArrayToConfigObject(nodes, sourceFile),
                file: file.path
            };
        }
    });
}
function propsArrayToConfigObject(nodes: NodeWithIndex[], sourceFile: ts.SourceFile): PropertiesConfig[] {
    return nodes.map(x => ({
        name: getNodeText(x.node, sourceFile)
            .replaceAll("\"", "")
            .replaceAll("'", ""),
        index: x.index
    }));
}



