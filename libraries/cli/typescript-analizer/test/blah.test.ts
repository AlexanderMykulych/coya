import { expect, test } from "vitest";
import { analize } from '../src';

test('analize core', () => {
    const result = analize("./../../../core");
    console.log(result);
    expect(result).not.null;
});
