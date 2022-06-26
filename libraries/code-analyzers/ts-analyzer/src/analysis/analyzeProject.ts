import { ProgramContainer } from "./types";
import { analyzeSourceFile } from "./analyzeSourceFile";
import { getProgramAndChecker } from "./getProgramAndChecker";


export const analyzeProject = (projPath: string) => {
  const container = getProgramAndChecker(projPath) as ProgramContainer;
  if (container.program) {
    container
      .program
      .getSourceFiles()
      .forEach(sourceFile => analyzeSourceFile({ sourceFile, checker: container.checker }));
  }
  return null;
};
