"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startTypescriptAnalizing = void 0;
const ts = require("typescript");
const watch_1 = require("@vue-reactivity/watch");
const state_1 = require("./state");
const core_1 = require("@coya/core");
function startTypescriptAnalizing(context) {
    (0, watch_1.watch)(state_1.default.files, files => {
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
        state_1.default.fileSources = files.map(x => program.getSourceFile(x)).filter(core_1.isNotNullOrUndefined);
        const test = state_1.default.fileSources[0];
        console.log(program);
    });
}
exports.startTypescriptAnalizing = startTypescriptAnalizing;
//# sourceMappingURL=startTypescriptAnalizing.js.map