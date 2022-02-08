import { assert, describe, it } from 'vitest';
import { analyze, init } from './../../src/analyzer/init';

describe('init', () => {
    it('init test 1', () => {
        assert.equal(analyze('/home/alex/RiderProjects/Coya/Coya/experimental/cli/ts-analyzer-examples/1'), 'inited');
    });
});