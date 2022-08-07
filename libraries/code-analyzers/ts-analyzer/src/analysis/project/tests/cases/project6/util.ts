import { getService } from "./service"

export function fn1(a: number) {
  const service = getService()
  return service.method1(a, 1)
}
