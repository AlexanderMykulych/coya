export const sum = (a: number, b: number) => {
  return (a+b) * calculator.getNumber() * calculator.nestedField1.nestedField2.nestedField3.getNumber2()
}

export function dec(a: number, b: number) {
  return a - b
}

const obj1 = {
  foo: 1
}

const calculator = {
  getNumber(): number {
    return 1
  },
  nestedField1: {
    nestedField2: {
      nestedField3: {
        getNumber2: () => {
          return 1
        }
      }
    }
  }
}