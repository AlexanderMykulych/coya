import { dec, sum } from "./utils"
import { Service } from './Service'

const service = new Service()

function f1() {
  return sum(1, 2) + dec(2, 1) + service.Foo('test')
}

f1()