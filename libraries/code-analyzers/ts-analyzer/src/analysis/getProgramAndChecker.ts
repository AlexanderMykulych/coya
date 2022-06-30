import path from 'path'
import * as ts from 'typescript'

export const getProgramAndChecker = (projPath: string, host?: ts.CompilerHost) => {
  const confPath = path.resolve(projPath, 'tsconfig.json')
  const { config } = ts.readConfigFile(confPath, ts.sys.readFile)
  const { options, fileNames, errors } = ts.parseJsonConfigFileContent(config, ts.sys, projPath)
  const program = ts.createProgram({
    options,
    rootNames: fileNames,
    configFileParsingDiagnostics: errors,
    host,
  })
  // const filePath = program.getRootFileNames()[0];
  const checker = program.getTypeChecker()
  return {
    program,
    checker,
    config,
  }
}
