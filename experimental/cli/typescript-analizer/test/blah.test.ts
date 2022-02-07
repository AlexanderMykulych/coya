import { expect, test } from "vitest";
import { analize } from '../src';

test('analize core', () => {
    const result = analize("/home/alex/RiderProjects/Coya/Coya/libraries/core");
    expect(result).not.null;
});
