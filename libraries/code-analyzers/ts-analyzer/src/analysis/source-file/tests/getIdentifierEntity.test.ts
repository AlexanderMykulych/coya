import { Project, SyntaxKind } from "ts-morph";
import { expect, test } from "vitest";
import { getIdentifierInfo } from "../identifier/getIdentifierInfo";

test('should', () => {
  const project = new Project({
    useInMemoryFileSystem: true,
  });
  const mainFile = project.createSourceFile('main.ts', 'import { sum } from "./utils"')
  project.createSourceFile('utils.ts', 'export function sum(a: number, b: number) { return a + b }"')

  const identifier = mainFile.getDescendantsOfKind(SyntaxKind.Identifier).find(x => x.getText() === 'sum')
  
  const res = identifier ? getIdentifierInfo(identifier) : null

  expect(res).toMatchSnapshot()
})
