import path from 'path'
import { expect, test } from 'vitest'
import { analyze } from '../../analyze'

test('should analyze simple ts project', async () => {
  const result = await analyze(path.resolve(__dirname, './cases/project4'))

  expect(result).toMatchSnapshot()
})

test('should analyze vue-ts project', async () => {
  const result = await analyze(path.resolve(__dirname, './cases/project5'))

  expect(result).toMatchSnapshot()

  const expObj = result
    .flatMap(x => Object.entries(x) as [string, string][])
    .filter(([_, val]) => val.includes ? val.includes('[object Object]') : false)
  expect(expObj,
    `shouldn't contain [object Object]. ${JSON.stringify(expObj)}`,
  ).empty

  expect(result).toEqual(expect.arrayContaining([
    expect.objectContaining({
      id: '/cmp.vue',
      type: 'entity',
    }),
    expect.objectContaining({
      id: '/util.ts/fn1',
      type: 'entity',
    }),
    expect.objectContaining({
      to: '/util.ts/fn1',
    }),
  ]))
})

test('should analyze complex vue-ts project', async () => {
  const result = await analyze(path.resolve(__dirname, './cases/project6'))

  expect(result).toMatchSnapshot()

  const expObj = result
    .flatMap(x => Object.entries(x) as [string, string][])
    .filter(([_, val]) => val.includes ? val.includes('[object Object]') : false)
  expect(expObj,
    `shouldn't contain [object Object]. ${JSON.stringify(expObj)}`,
  ).empty

  expect(result).toEqual(expect.arrayContaining([
    expect.objectContaining({
      id: '/services/service.ts/getService/method1',
      type: 'entity',
    }),
    expect.objectContaining({
      id: '/utils/util.ts/fn1',
      type: 'entity',
    }),
    expect.objectContaining({
      from: '/utils/util.ts/fn1',
      to: '/services/service.ts/getService/method1',
    }),
  ]))
})

test('should analyze complex vue2-ts project', async () => {
  const result = await analyze(path.resolve(__dirname, './cases/project8'))

  expect(result).toMatchSnapshot()

  const expObj = result
    .flatMap(x => Object.entries(x) as [string, string][])
    .filter(([_, val]) => val.includes ? val.includes('[object Object]') : false)
  expect(expObj,
    `shouldn't contain [object Object]. ${JSON.stringify(expObj)}`,
  ).empty

  expect(result).toEqual(expect.arrayContaining([
    expect.objectContaining({
      id: '/services/service.ts/getService/method1',
      type: 'entity',
    }),
    expect.objectContaining({
      id: '/utils/util.ts/fn1',
      type: 'entity',
    }),
    expect.objectContaining({
      from: '/utils/util.ts/fn1',
      to: '/services/service.ts/getService/method1',
    }),
  ]))
})
