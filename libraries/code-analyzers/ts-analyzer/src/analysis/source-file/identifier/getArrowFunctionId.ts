import { ArrowFunction } from "ts-morph";
import { getParentId } from "./getParentId";

export function getArrowFunctionId(arrowFn: ArrowFunction): string {
  return getParentId(arrowFn)
}