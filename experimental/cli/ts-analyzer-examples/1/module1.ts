import { add, multiply } from './module2';

export function moduleFn1() {
    const res1 = add(2, 3);
    const res2 = multiply(res1, 4);
    function test1(a: number, b: number) {
        return a + b;
    }
    return test1(res1, res2);
}
