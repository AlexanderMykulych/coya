import { func2 as func2Alias, func3 as func3Alias } from "./funcs"

export function func1(a: number, b: number): number {
  return func2Alias(a, b)
}

export const func1_1 = func1
export const func2_1 = func2Alias

export const func3 = () => {
  return func2Alias(1, 2)
}

export const func4 = () => {
  return () => {
    return 10 + func2Alias(1, 2) + func3Alias()
  }
}
