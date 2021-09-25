"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createViteFileSymlink = void 0;
const fs_1 = require("fs");
const path = require("path");
function createViteFileSymlink(context, file) {
    try {
        const dir = path.parse(file.path).dir;
        const folderName = path.basename(dir);
        const resultDir = `${context.extensionPath}/vite-proj/coya/${folderName}`;
        if ((0, fs_1.existsSync)(resultDir)) {
            (0, fs_1.unlinkSync)(resultDir);
        }
        (0, fs_1.symlink)(dir, resultDir, "dir", (err) => {
            if (err) {
                console.error("createViteFileSymlink -> symlink", err);
            }
            else {
                console.log(`symlink on folder ${folderName} created`);
            }
        });
    }
    catch (e) {
        console.log("createViteFileSymlink", e);
    }
}
exports.createViteFileSymlink = createViteFileSymlink;
//# sourceMappingURL=createViteFileSymlink.js.map