import { existsSync, readdirSync, rmdirSync, symlink, unlinkSync } from 'fs';
import path = require('path');
import * as vscode from 'vscode';

export function createViteFileSymlink(context: vscode.ExtensionContext, file: vscode.Uri) {
    try {
        const dir = path.parse(file.path).dir;
        const folderName = path.basename(dir);
        const resultDir = `${context.extensionPath}/vite-proj/coya/${folderName}`;
        if (existsSync(resultDir)) {
            unlinkSync(resultDir);
        }
        symlink(dir, resultDir, "dir", (err) => {
            if (err) {
                console.error("createViteFileSymlink -> symlink", err);
            } else {
                console.log(`symlink on folder ${folderName} created`);
            }
        });
    } catch (e) {
        console.log("createViteFileSymlink", e);
    }
}
