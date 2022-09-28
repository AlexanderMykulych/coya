import { sum } from "./utils"
import { Service } from './Service'

const service = new Service()

function f1() {
  return sum(1, 2) + service.Foo('test')
}

f1()