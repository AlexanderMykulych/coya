import { expect } from "vitest";

export function objectExpect<T>(obj: Partial<T>): any {
  return expect.objectContaining(obj)
}