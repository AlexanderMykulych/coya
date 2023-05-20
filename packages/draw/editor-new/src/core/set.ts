import { isNotNullOrUndefined, isNullOrUndefined } from 'coya-util';

export const set = (obj: any, path: string[] | string, val: any) => {
    if (typeof path === 'string')
        path = path.split('.');

    const leftPath = path.slice(0, path.length - 1);
    const lastItem = path[path.length - 1];
    leftPath.forEach((x) => {
        if (isNullOrUndefined(obj[x]))
            obj[x] = {};

        obj = obj[x];
    });
    if (isNotNullOrUndefined(obj))
        obj[lastItem] = val;
};
