import * as ts from "typescript";

export const init = () => {
    return 'inited';
}

export const analyze = (projPath: string) => {
    const sourceFile = getSourceFile(projPath);
    if (sourceFile) {
        analyzeSourceFile(sourceFile);
    }
    return null;
}
export const traverseNodes = (sourceFile: ts.SourceFile) => {
    ts.forEachChild(sourceFile, node => {
        console.log(node);
    });
}

export const getSourceFile = (projPath: string) => {
    const confPath = `${projPath}/tsconfig.json`;
    const { config } = ts.readConfigFile(confPath, ts.sys.readFile);
    const { options, fileNames, errors } = ts.parseJsonConfigFileContent(config, ts.sys, projPath);
    const program = ts.createProgram({
        options,
        rootNames: fileNames,
        configFileParsingDiagnostics: errors,
    });
    const filePath = program.getRootFileNames()[0];
    return program.getSourceFile(filePath);
}

export function analyzeSourceFile(sourceFile: ts.SourceFile) {
    ts.forEachChild(sourceFile, node => {
        console.log(node);
    });
}
