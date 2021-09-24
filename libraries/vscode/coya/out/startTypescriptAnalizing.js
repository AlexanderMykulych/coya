"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startTypescriptAnalizing = void 0;
const ts = require("typescript");
const watch_1 = require("@vue-reactivity/watch");
const state_1 = require("./state");
const core_1 = require("@coya/core");
function startTypescriptAnalizing(context) {
    const options = getOptions();
    const compilerHost = ts.createCompilerHost(options);
    compilerHost.getSourceFile = (fileName) => {
        var _a;
        const file = (_a = state_1.default.files) === null || _a === void 0 ? void 0 : _a.find(x => x.path.indexOf(fileName) > -1);
        if (file) {
            const source = ts.createSourceFile(fileName, file.document.getText(), ts.ScriptTarget.ES2016, true);
            return source;
        }
    };
    (0, watch_1.watch)(() => state_1.default.files.length, _ => {
        console.log("startTypescritpAnalizing, watch(state.files)");
        const files = state_1.default.files;
        const paths = files.map(x => x.path);
        var program = ts.createProgram(paths, options, compilerHost);
        state_1.default.fileSources = paths.map(x => program.getSourceFile(x)).filter(core_1.isNotNullOrUndefined);
    }, { deep: true });
}
exports.startTypescriptAnalizing = startTypescriptAnalizing;
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
//# sourceMappingURL=startTypescriptAnalizing.js.map