export function getService() {
  return {
    method1(a: number, b: number) {
      return (a + b) / 2
    },
    prop1: {
      method2(a: number) {
        return a * a
      }
    }
  }
}