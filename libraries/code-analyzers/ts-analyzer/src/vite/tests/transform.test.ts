import { test, expect } from 'vitest'
import { transform } from '../transform'

test('should transform ts code', async () => {
  const code = `
function fn1() {
  return 1
}
const obj = {
  fn1() {
    return 2
  },
  fn2: () => 3,
  fn3: () => { return 4 },
  fn4: () =>
    {
      return 4 },
}
class A {
  method() {

    return 5
  }
}
const fn5 = () => { return 6 }
  `
  const fileName = 'index.ts'

  const resultCode = await transform(code, fileName)

  expect(resultCode).toMatchSnapshot()
})
