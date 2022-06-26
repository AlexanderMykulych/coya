import * as ts from "typescript";
import path  from 'path'

export const getProgramAndChecker = (projPath: string) => {
  const confPath = path.resolve(projPath, 'tsconfig.json');
  const { config, error } = ts.readConfigFile(confPath, ts.sys.readFile);
  const { options, fileNames, errors } = ts.parseJsonConfigFileContent(config, ts.sys, projPath);
  const program = ts.createProgram({
    options,
    rootNames: fileNames,
    configFileParsingDiagnostics: errors,
  });
  // const filePath = program.getRootFileNames()[0];
  const checker = program.getTypeChecker();
  return {
    program,
    checker,
    config,
  };
};
