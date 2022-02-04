export const groupBy = function <T>(xs: T[], func: (item: T) => any) {
    return xs.reduce((rv: any, x) => {
        const val = func(x);
        (rv[val] = rv[val] || []).push(x);
        return rv;
    }, {});
};
