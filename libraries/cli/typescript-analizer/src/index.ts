import * as ts from "typescript";
import { FileInfo, Index } from "./types";
import { Edge, GridLayout, Model, DagreLayout } from '@antv/layout'
import * as hierarchy from "@antv/hierarchy";
import * as fs from "fs";
import path from "path";

export function analize(projPath: string) {
    const confPath = `${projPath}/tsconfig.json`;
    const { config } = ts.readConfigFile(confPath, ts.sys.readFile);
    const { options, fileNames, errors } = ts.parseJsonConfigFileContent(config, ts.sys, projPath)

    const program = ts.createProgram({
        options,
        rootNames: fileNames,
        configFileParsingDiagnostics: errors,
    });
    const filePath = program.getRootFileNames()[0];
    const index: Index = {};
    analizeFile(index, program, program.getSourceFile(filePath));

    const coya = indexToCoya(index);
    saveCoyaConfig("/home/alex/RiderProjects/Coya/Coya/libraries/vue-component/src/examples/test.coya.json", coya)
    return coya;
}

export const analizeFile = (index: Index, program: ts.Program, file: ts.SourceFile | undefined) => {
    if (!file) {
        return null;
    }
    const fileInfo = getFileInfo(file);
    if (index[fileInfo.name] || fileInfo.isExternalLib) {
        return fileInfo;
    }

    index[fileInfo.name] = {
        ...fileInfo,
        children: []
    };

    const checker = program.getTypeChecker();

    const imports = getImports(file);
    if (imports?.length > 0) {
        imports.forEach(i => {
            const symbol = checker.getSymbolAtLocation(i.moduleSpecifier);
            if (symbol) {
                const iSourceFile = symbol.valueDeclaration!.getSourceFile();
                const iFileInfo = analizeFile(index, program, iSourceFile);
                if (iFileInfo) {
                    index[fileInfo.name].children.push(iFileInfo.name);
                }
            }
        });
    }

    return fileInfo;
}

export const getImports = (sourceFile: ts.SourceFile) => {
    return sourceFile
        .statements
        .filter(x => x.kind === ts.SyntaxKind.ImportDeclaration) as ts.ImportDeclaration[];
}
export const getFileInfo = (sourceFile: ts.SourceFile): FileInfo => {
    return {
        name: replaceAll(
            path.basename(sourceFile.fileName, path.extname(sourceFile.fileName)),
            ".", "_"
        ),
        path: sourceFile.fileName,
        isExternalLib: sourceFile.fileName.indexOf("/node_modules/") > -1
    };
}

export const indexToCoya = (index: Index) => {
    
    const layoutObj = new DagreLayout({
        type: "dagre",
        ranksep: 70,
        controlPoints: true,
        nodeSize: 300
    });
    // const layoutObj = new layout({
    //     unitRadius: 500,
    //     center: [500, 300],
    // });

    const data = indexToG6(index);

    const g6LayoutResult = layoutObj.layout(data);
    console.log(g6LayoutResult.nodes[0]);

    const coya = g6ToCoya(g6LayoutResult);

    return coya;
}

export const indexToG6 = (index: Index): Model => {
    return {
        nodes: Object.entries(index)
            .map(([name], index) => ({
                id: name,
                name,
                x: index === 0 ? 100 : undefined,
                y: index === 0 ? 100 : undefined,
            })),
        edges: Object.entries(index)
            .flatMap<Edge | null>(([name, b]) => b.children.map(child => !!index[child] ? ({
                source: name,
                target: child,
            }) : null))
            .filter(x => !!x) as Edge[]
    };
}

export const g6ToCoya = (graph: ReturnType<typeof indexToG6>) => {
    const blocks = Object.fromEntries(
        [
            ...graph
                .nodes!
                .map(x => [x.id, x.name]),
            ...graph
                .edges!
                .map((x, index) => [`line_${index}`, {
                    from: x?.source,
                    to: x?.target,
                    type: "line",
                    label: "",
                }])
        ]
    );
    const blocksStyle = Object.fromEntries(
        graph.nodes!
            .map(x => [x.id, {
                position: {
                    x: `${x.x}`,
                    y: `${x.y}`,
                    w: "280",
                    h: "110",
                }
            }])
    );
    return {
        name: "coya-ts-cli",
        blocks,
        phases: [],
        style: {
            blocks: blocksStyle
        }
    };
}

export const saveCoyaConfig = (filePath: string, config: any) => {
    fs.writeFileSync(filePath, JSON.stringify(config, null, "\t"));
}

const replaceAll = (str: string, source: string, target: string) => str.split(source).join(target);