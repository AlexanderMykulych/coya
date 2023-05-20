import { computed } from 'vue';
import { isArray } from 'coya-core';
import { set } from './set';

export function createComputed(getObj: any, setObjects: any[], configs: string[] | (string[])[]) {
    const res = {};

    const get = (obj: any, path: string[]) => {
        if (path.every((x) => {
            if (obj?.[x] !== undefined) {
                obj = obj[x];
                return true;
            }
            return false;
        }))
            return obj;
    };
    configs.forEach((item) => {
        if (!isArray(item))
            item = [item];

        const path = item[0].split('.');
        res[path[path.length - 1]] = computed({
            get: () => {
                const res = get(getObj.value, path);
                return item[1] ? item[1](res) : res;
            },
            set: (val) => {
                setObjects.forEach(x => set(x.value, path, val));
            },
        });
    });
    return res;
}
