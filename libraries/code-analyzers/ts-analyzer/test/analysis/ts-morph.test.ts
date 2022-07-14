import path from "path";
import { Project, ScriptKind, SourceFile, SyntaxKind, TypeFormatFlags, Node } from "ts-morph";
import { ViteDevServer } from "vite";
import { describe, expect, test } from "vitest";
import { CustomFileHost } from "../../src/analysis/ts-morph/CustomFileHost";
import { getViteServer } from "../../src/analysis/vite/getViteServer";
import { getNodeName } from "../../src/components/utils";

describe.skip('ts-morph', () => {
    test('ts-morph + vite server', async () => {
      const funcRelationProjectPath = path.join(__dirname, '/cases/04_vue')
      const viteServer = await getViteServer(funcRelationProjectPath)
    
      // const tmp_project = new Project({
      //   tsConfigFilePath: path.join(funcRelationProjectPath, 'tsconfig.json'),
      //   skipAddingFilesFromTsConfig: true,
      //   skipFileDependencyResolution: true,
      //   skipLoadingLibFiles: true,
      // })
      // const fileHost = new CustomFileHost(viteServer, tmp_project.getFileSystem())
    
      const project = new Project({
        useInMemoryFileSystem: true,
        compilerOptions: {
          rootDir: funcRelationProjectPath,
          allowJs: true,
          allowUnreachableCode: true,
        },
        // tsConfigFilePath: path.join(funcRelationProjectPath, 'tsconfig.json'),
        skipAddingFilesFromTsConfig: true,
        skipFileDependencyResolution: true,
        skipLoadingLibFiles: true,
      })

      await addSourceFile(viteServer, project, '/main.ts', funcRelationProjectPath)

      // const emitResult = await project.emit()
      // console.log('----------')
      // emitResult.getFiles().forEach(x => console.log(x.filePath, x.text))
      // console.log('----------')
      // emitResult.getDiagnostics().forEach(x => console.log(x.getCode, x.getMessageText))

      const sourceFiles = project.getSourceFiles().filter(x => !x.getFilePath().includes('node_module'));
      sourceFiles.forEach(x => {
        console.log('__________')
        console.log(x.getFilePath())
        console.log(calc(x))
        console.log('__________')
      })
      expect(sourceFiles).not.empty
      expect(viteServer).not.empty
    })
})

async function addSourceFile(viteServer: ViteDevServer, project: Project, filePath: string, basePath: string) {
  const fileName = filePath.replace(basePath, '');
  const existedSourceFile = project.getSourceFile(fileName)
  if (existedSourceFile) {
    return
  }

  const module = await viteServer.transformRequest(filePath)

  console.log('fileName', fileName)

  const sourceFile = project.createSourceFile(fileName.endsWith('.vue') ? `${fileName}.js` : fileName, module?.code, { overwrite: true })

  if (fileName.endsWith('.vue')) {
    console.log(module?.code)
  }

  const deps = sourceFile.getImportDeclarations().map(x => x.getModuleSpecifier().getLiteralText())
  if (deps) {
    for await (const dep of deps) {
      await addSourceFile(viteServer, project, dep, basePath)
    }
  }
}

const calc = (sourceFile: SourceFile) => ({
  baseName: sourceFile.getBaseName(),
  childCount: sourceFile.getChildCount(),
  exportsCount: sourceFile.getExportSymbols().length,
  declarations: sourceFile.getDescendants()
    .filter(x => Node.isFunctionDeclaration(x) || Node.isVariableDeclaration(x))
    .map(d => ({
        type: d.getType().getText(undefined, TypeFormatFlags.NoTruncation | TypeFormatFlags.UseFullyQualifiedType),
        kind: d.getKindName(),
        name: getNodeName(d),
        refs: d.getDescendantsOfKind(SyntaxKind.Identifier).map(x => ({
          text: x.getText(),
          defs: x.getDefinitions().map(d => ({
            fileName: d.getSourceFile().getBaseName(),
            text: d.getDeclarationNode()?.getText(),
            originName: getNodeName(d.getDeclarationNode()),
            type: d.getDeclarationNode()?.getKindName(),
            y: d.getDeclarationNode()?.getLocals().map(x => x.getName()),
          })),
        })), 
      })),
  exportDeclarations: sourceFile.getExportDeclarations().map(x => ({
    text: x.getFullText(),
  })),
  exportAssignments: sourceFile.getExportAssignments().map(x => ({
    x: x.getFullText(),
  })),
  refs: sourceFile.getReferencedSourceFiles().map(x => x.getFilePath()),
});
