import * as ts from "typescript";

export const init = () => {
    return 'inited';
}

export const analyze = (projPath: string) => {
    const container = getSourceFile(projPath) as SourceContainer;
    if (container.sourceFile) {
        analyzeSourceFile(container);
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
    const checker = program.getTypeChecker();
    return {
        sourceFile: program.getSourceFile(filePath),
        checker,
    };
}

export function analyzeSourceFile({sourceFile, checker}: SourceContainer) {
    const symbol = checker.getSymbolAtLocation(sourceFile);
    if (symbol) {
        symbol.exports?.forEach(item => {
            if (item.valueDeclaration) {
                visitNodes(item.valueDeclaration, node => {
                    if (ts.isIdentifier(node)) {
                        console.log(node.kind, node.getText());
                        const nodeSymbol = checker.getSymbolAtLocation(node);
                        const importDeclaration = nodeSymbol
                            ?.declarations
                            ?.find(x => ts.isImportSpecifier(x));
                        if (importDeclaration) {
                            console.log(importDeclaration.getFullText());
                        }
                    }
                });
            }
        })
    }
}
function visitNodes(node: ts.Node, visitor: (x: ts.Node) => void) {
    ts.forEachChild(node, (visitedNode) => {
        visitor(visitedNode);
        visitNodes(visitedNode, visitor);
    });
}
export interface SourceContainer {
    sourceFile: ts.SourceFile
    checker: ts.TypeChecker
}