import * as ts from "typescript";
import { addRelation } from "./addRelation";

export const init = () => {
    return 'inited';
}

export const analyze = (projPath: string) => {
    const container = getSourceFile(projPath) as ProgramContainer;
    if (container.program) {
        container
            .program
            .getSourceFiles()
            .forEach(sourceFile => analyzeSourceFile({sourceFile, checker: container.checker}));
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
        program,
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
                        const nodeSymbol = checker.getSymbolAtLocation(node);
                        if (nodeSymbol) {
                            const nodeType = checker.getTypeOfSymbolAtLocation(nodeSymbol, node);
                            const importSpecifier = nodeSymbol
                                ?.declarations
                                ?.find(x => ts.isImportSpecifier(x));
                            if (importSpecifier && ts.isImportSpecifier(importSpecifier)) {
                                const moduleSymbol = nodeType.getSymbol();
                                if (moduleSymbol) {
                                    const moduleSourceFile = moduleSymbol.valueDeclaration!.getSourceFile();
                                    addRelation({
                                        filePath: sourceFile.path,
                                        name: item.getName(),
                                    }, {
                                        filePath: moduleSourceFile.path,
                                        name: moduleSymbol.getEscapedName(),
                                    })
                                    // console.log(checker.typeToString(checker.getTypeOfSymbolAtLocation(moduleSymbol, moduleSourceFile)));
                                }
                            }
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
export interface ProgramContainer {
    program: ts.Program
    checker: ts.TypeChecker
}
export interface SourceContainer {
    sourceFile: ts.SourceFile
    checker: ts.TypeChecker
}