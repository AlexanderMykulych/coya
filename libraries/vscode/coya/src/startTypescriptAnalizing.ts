import * as vscode from 'vscode';
import * as ts from "typescript";
import { watch } from '@vue-reactivity/watch';
import state from './state';
import { isNotNullOrUndefined } from '@coya/core';

export function startTypescriptAnalizing(context: vscode.ExtensionContext) {
    watch(state.files, files => {
        var program = ts.createProgram(files, {
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
        }); 
        state.fileSources = files.map(x => program.getSourceFile(x)).filter(isNotNullOrUndefined);
        const test = state.fileSources[0];
        console.log(program);
    });
}
