import { isString } from "coya-core";

export function prepareNum(val: string | Number) {
    const num = Number(val);
    if (!isNaN(num)) {
        const res = Math.round((num + Number.EPSILON) * 100) / 100;
        return isString(val) ? `${res}` : res;
    }
    return val;
}
