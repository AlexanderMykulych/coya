import path from 'path';
import { Project, getCompilerOptionsFromTsConfig } from 'ts-morph';
import { processFile } from '../analyzeProject';

export async function defaultInitializeProject(projectPath: string, project: Project): Promise<boolean> {
  const fileSystem = project.getFileSystem()

  const fileWaiters: Promise<void>[] = []

  const oldReadFile = fileSystem.readFileSync
  fileSystem.readFileSync = function (filePath, encoding) {
    const content = oldReadFile.call(fileSystem, filePath, encoding)

    if (filePath.endsWith('.vue')) {
      fileWaiters.push(getFileWaiter(filePath, content, project))
    }

    return content
  }

  project.addSourceFilesFromTsConfig('tsconfig.ts')
  await Promise.all(fileWaiters)

  return false;
}

async function getFileWaiter(filePath: string, content: string, project: Project): Promise<void> {
  const processedFile = await processFile({
    file: filePath,
    text: content,
  })

  project.createSourceFile(processedFile.file, processedFile.text);
}
