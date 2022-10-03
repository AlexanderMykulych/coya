import { Project, SyntaxKind } from "ts-morph";
import { test, expect } from "vitest";
import { getNodeInfo } from "../identifier/getNodeId";

test('should analyze', () => {
  const project = new Project({
    useInMemoryFileSystem: true,
  });
  const utilsSource = project.createSourceFile('utils.ts', 'export function sum(a: number, b: number) { return a + b }"')
  const fn = utilsSource.getDescendantsOfKind(SyntaxKind.FunctionDeclaration)[0]
  const result = fn ? getNodeInfo(fn) : null

  expect(result).toMatchSnapshot(result)
})
