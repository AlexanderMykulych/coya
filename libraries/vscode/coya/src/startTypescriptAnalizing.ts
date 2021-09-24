import * as vscode from 'vscode';
import * as ts from "typescript";
import { watch } from '@vue-reactivity/watch';
import state from './state';
import { isNotNullOrUndefined } from '@coya/core';

export function startTypescriptAnalizing(context: vscode.ExtensionContext) {
    const options = getOptions();
    const compilerHost = ts.createCompilerHost(options);
    
    compilerHost.getSourceFile = (fileName: string) => {
        const file = state.files?.find(x => x.path.indexOf(fileName) > -1);
        if (file) {
            const source = ts.createSourceFile(fileName, file.document.getText(), ts.ScriptTarget.ES2016, true);
            return source;
        }
    };
    
    watch(() => state.files.length, _ => {
        console.log("startTypescritpAnalizing, watch(state.files)");
        const files = state.files;
        const paths = files.map(x => x.path);
        var program = ts.createProgram(paths, options, compilerHost);
        state.fileSources = paths.map(x => program.getSourceFile(x)).filter(isNotNullOrUndefined);
    }, {deep: true});
}
function getOptions() {
    return {
        "baseUrl": ".",
        "module": ts.ModuleKind.ESNext,
        "target": ts.ScriptTarget.ES2016,
        "lib": ["DOM", "ESNext"],
        "strict": true,
        "esModuleInterop": true,
        "incremental": false,
        "skipLibCheck": true,
        "moduleResolution": ts.ModuleResolutionKind.NodeJs,
        "resolveJsonModule": true,
        "noUnusedLocals": true,
        "strictNullChecks": true,
        "forceConsistentCasingInFileNames": true,
        "types": [
            "vite/client",
            "vite-plugin-pages/client"
        ],
        "paths": {
            "~/*": ["src/*"]
        }
    };
}

