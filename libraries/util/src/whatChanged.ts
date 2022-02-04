import type { ChangedItem } from './ChangedItem';

function isObject(object: any) {
    return object != null && typeof object === 'object';
}
export function whatChanged(initObj: any, changedObj: any, findFirst = true): ChangedItem[] {
    const res: ChangedItem[] = [];
    const deepEqual = (object1: any, object2: any, parentPath: string) => {
        if (findFirst && res.length > 0)
            return;

        const keys = new Set([...Object.keys(object1), ...Object.keys(object2)]);
        keys.forEach((key) => {
            const val1 = object1[key];
            const val2 = object2[key];
            const areObjects = isObject(val1) && isObject(val2);
            const fullPath = `${parentPath}${parentPath ? '.' : ''}${key}`;
            if (areObjects) {
                if ((Array.isArray(val1) && !Array.isArray(val2))
                    || (!Array.isArray(val1) && Array.isArray(val2))
                    || (val1 === null && val2 !== null)
                    || (val1 !== null && val2 === null)
                ) {
                    res.push({
                        attr: key,
                        fullPath,
                        oldVal: val1,
                        val: val2,
                    });
                }
                else {
                    deepEqual(val1, val2, fullPath);
                }
            }
            else if (val1 !== val2) {
                res.push({
                    attr: key,
                    fullPath,
                    oldVal: val1,
                    val: val2,
                });
                if (findFirst)
                    return;
            }
        });
    };
    deepEqual(initObj, changedObj, '');
    res.forEach(x => x.parents = x.fullPath.split('.'));
    return res;
}
