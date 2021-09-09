export function deepCopy(val: any) {
    return !!val ? JSON.parse(JSON.stringify(val)) : val;
}