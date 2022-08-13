import path from 'path';
import { Project } from 'ts-morph';
import { fileTraverser } from '../import/fileTraverser';
import { getEntryPoint, readFile } from './getEntryPoint';
import { processFile } from './analyzeProject';
import { defaultInitializeProject } from './projectInitializer/defaultInitializeProject';

export async function initializeProject(projectPath: string, project: Project, type: 'custom' | 'default'): Promise<boolean> {
  if (type === 'custom') {
    return await customInitializeProject(projectPath, project)
  } else if (type === 'default') {
    return await defaultInitializeProject(projectPath, project)
  }

  return false
}

async function customInitializeProject(projectPath: string, project: Project): Promise<boolean> {
  const entryFile = await getEntryPoint(projectPath);
  if (entryFile) {
    const entrySourceFile = project.createSourceFile(entryFile.file, entryFile.text);

    await fileTraverser(entrySourceFile, async (filePath) => {
      const file = await readFile(path.resolve(projectPath, filePath), projectPath);
      if (file) {
        const processedFile = await processFile(file);

        return project.createSourceFile(processedFile.file, processedFile.text);
      }
    });
    return true;
  }
  return false;
}
