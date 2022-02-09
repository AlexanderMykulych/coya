import { minus } from './module3';

export function add(a: number, b: number) {
    return minus(a + b, 0);
}

export function multiply(a: number, b: number) {
    return a * b;
}
