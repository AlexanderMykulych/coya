import { func2 as func2Alias } from "./funcs"

export function func1(a: number, b: number): number {
  return func2Alias(a, b)
}

export const func1_1 = func1
export const func2_1 = func2Alias
