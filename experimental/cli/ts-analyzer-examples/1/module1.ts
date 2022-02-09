import { add, multiply as m1, multiply } from './module2';

export function moduleFn1() {
    const res1 = add(2, 3);
    const res2 = m1(res1, 4);
    const res3 = multiply(res1, 4);
    function test1(a: number, b: number) {
        return add(a, b);
    }
    return test1(res1, res2);
}
