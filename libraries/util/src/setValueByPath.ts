export function setValueByPath(obj: any, value: any, path: string) {
    let i = 0;
    const paths = path.split('.');
    for (i = 0; i < paths.length - 1; i++) {
        if (obj !== null && obj !== undefined) {
            obj = obj[paths[i]];
        }
    }

    obj[paths[i]] = value;
}