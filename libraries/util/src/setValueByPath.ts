import type { ChangedItem } from './ChangedItem';

export function setValueByPath(obj: any, value: any, path: string, isDeleteUndefined = true) {
    let i = 0;
    const paths = path.split('.');
    for (i = 0; i < paths.length - 1; i++) {
        if (obj !== null && obj !== undefined)
            obj = obj[paths[i]];
    }
    const index = paths[i];
    if (Array.isArray(obj) && !isNaN(Number(index)) && value === undefined) {
        const indexNum = Number(index);
        obj.splice(indexNum, 1);
    }
    else if (value === undefined && isDeleteUndefined) {
        delete obj[index];
    }
    else {
        obj[index] = value;
    }
}

export function changeValue(obj: any, changes: ChangedItem[]) {
    const sortedChanges = changes.sort((a, b) => {
        const ap = a.parents;
        const bp = b.parents;
        if (ap && bp) {
            if (ap.length > bp.length) {
                return -1;
            }
            else if (ap.length < bp.length) {
                return 1;
            }
            else {
                for (let i = 0; i < ap.length; i++) {
                    const apVal = ap[i];
                    const apValNum = Number(apVal);
                    const bpVal = bp[i];
                    const bpValNum = Number(bpVal);
                    if (apVal === bpVal)
                        continue;

                    if (!isNaN(apValNum) && !isNaN(bpValNum))
                        return bpValNum > apValNum ? 1 : -1;
                }
            }
        }
        return 0;
    });

    sortedChanges.forEach(change => setValueByPath(obj, change.val, change.fullPath));
}
