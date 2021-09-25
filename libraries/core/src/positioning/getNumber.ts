import { isRef, Ref } from "vue";
import { NumberValue } from "../types";

export function getNumber(obj: NumberValue | Ref<number>): number {
    return isRef(obj) ? obj.value : <number>obj;
}
