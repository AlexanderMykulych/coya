import { getFilteredKeys } from './getFilteredKeys';

export const fastDeepEqual = equal;

function equal(a: any, b: any): boolean {
    if (a === b) return true;

    if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor) return false;

        let length, i;
        if (Array.isArray(a)) {
            length = a.length;
            if (length !== b.length) return false;
            for (i = length; i-- !== 0;)
                if (!equal(a[i], b[i])) return false;
            return true;
        }

        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

        const keys = getFilteredKeys(a);
        const bKeys = getFilteredKeys(b);
        length = keys.length;
        if (length !== bKeys.length) return false;

        for (i = length; i-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

        for (i = length; i-- !== 0;) {
            const key = keys[i];
            if (!equal(a[key], b[key])) return false;
        }

        return true;
    }

    return false;
}
