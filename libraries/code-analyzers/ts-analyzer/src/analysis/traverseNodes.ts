import * as ts from "typescript";


export const traverseNodes = (sourceFile: ts.SourceFile) => {
  ts.forEachChild(sourceFile, node => {
    console.log(node);
  });
};
