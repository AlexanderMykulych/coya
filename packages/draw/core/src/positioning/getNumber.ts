import type { Ref } from 'vue';
import { isRef } from 'vue';
import type { NumberValue } from '../types';

export function getNumber(obj: NumberValue | Ref<number>): number {
    return isRef(obj) ? obj.value : <number>obj;
}
