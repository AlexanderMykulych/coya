import { watch } from '@vue-reactivity/watch';
import { computed } from '@vue/reactivity';
import * as vscode from 'vscode';
import state from './state';
import * as ts from "typescript";
import { getTokensAtPosition, NodeWithIndex } from './tsutil/getTokensAtPosition';
import { isNotNullOrUndefined, PropertiesConfig } from "@coya/core";

export function activateLogic(context: vscode.ExtensionContext, file: vscode.Uri) {
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
function propsArrayToConfigObject(nodes: NodeWithIndex[], sourceFile: ts.SourceFile): PropertiesConfig {
    const properties = nodes
        .map(x => x.node.name.getText(sourceFile))
        .filter(isNotNullOrUndefined);
    let config: any = {
        prop: "",
        child: null
    };
    const root = config;
    nodes
        .map((prop, index) => ({prop, index}))
        .forEach(({ prop, index }) => {
            const name = prop.node.name.getText(sourceFile);
            config.prop = name
                .replaceAll("\"", "")
                .replaceAll("'", "");
            config.index = prop.index;
            if (index < properties.length - 1) {
                config.child = {};
                config = config.child;
            }
        });
    return root;
}

