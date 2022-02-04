import { expect, test } from 'vitest';
import type { ArchitectureDescription } from '..';
import { generateTree } from '../positioning/g6/generateTree';
import testJson from './test.coya.json';

test('analize core', () => {
    const result = generateTree(testJson as ArchitectureDescription, 'CompactBox', {});
    expect(result).toMatchSnapshot();
});
