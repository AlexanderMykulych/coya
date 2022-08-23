import { resolve } from "path";
import { expect, test } from "vitest";
import { getAllFSUnitsFlat } from "../fs";

const testCases = [
  {
    path: './сases/case_error',
    name: 'one error',
    result: [
      expect.objectContaining({
        type: 'error',
      })
    ],
  },
  {
    path: './сases/case_02',
    name: 'one folder',
    result: [
      expect.objectContaining({
        type: 'folder',
        relativePath: 'folder',
      })
    ],
  },
  {
    path: './сases/case_01',
    name: 'one file',
    result: [
      expect.objectContaining({
        type: 'file',
        filename: 'file.ts',
        relativePath: 'file.ts',
      })
    ],
  },
  {
    path: './сases/case_04',
    name: 'nested file',
    result: expect.arrayContaining([
      expect.objectContaining({
        type: 'folder',
        foldername: 'folder1',
        relativePath: 'folder1',
      }),
      expect.objectContaining({
        filename: 'file1.ts',
        relativePath: 'folder1/file1.ts',
        type: 'file',
      }),
    ]),
  },
  {
    path: './сases/case_03',
    name: 'two nested files',
    result: expect.arrayContaining([
      expect.objectContaining({
        type: 'file',
        filename: 'file1.ts',
        relativePath: 'file1.ts',
      }),
      expect.objectContaining({
        type: 'file',
        filename: 'file2.ts',
        relativePath: 'folder1/file2.ts',
      }),
      expect.objectContaining({
        type: 'folder',
        foldername: 'folder1',
        relativePath: 'folder1',
      }),
    ]),
  },
  {
    path: './сases/case_05',
    name: 'deep nested files',
    result: expect.arrayContaining([
      expect.objectContaining({
        type: 'file',
        filename: 'file1.vue',
        relativePath: 'file1.vue',
      }),
      expect.objectContaining({
        type: 'file',
        filename: 'file2.ts',
        relativePath: 'folder1/file2.ts',
      }),
      expect.objectContaining({
        type: 'file',
        filename: 'file3.vue',
        relativePath: 'folder1/folder2/folder3/folder4/file3.vue',
      }),
      expect.objectContaining({
        type: 'folder',
        foldername: 'folder1',
        relativePath: 'folder1',
      }),
      expect.objectContaining({
        type: 'folder',
        foldername: 'folder2',
        relativePath: 'folder1/folder2',
      }),
      expect.objectContaining({
        type: 'folder',
        foldername: 'folder3',
        relativePath: 'folder1/folder2/folder3',
      }),
      expect.objectContaining({
        type: 'folder',
        foldername: 'folder4',
        relativePath: 'folder1/folder2/folder3/folder4',
      }),
    ]),
  },
]

test.each(testCases)
  ('should read $name', async ({ path, result }) => {
    const folderDir = resolve(__dirname, path)
    const units = await getAllFSUnitsFlat(folderDir)

    expect(units).toEqual(result)
  })