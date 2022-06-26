import { func2 } from "./funcs"

export function func1(a: number, b: number): number {
  return func2(a, b)
}

export const func1_1 = func1
export const func2_1 = func2
