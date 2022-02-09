import { assert, describe, it } from 'vitest';
import { flushStore } from '../../src/analyzer/addRelation';
import { analyze, init } from './../../src/analyzer/init';

describe('init', () => {
    it('init test 1', async () => {
        analyze('/home/alex/RiderProjects/Coya/Coya/experimental/cli/ts-analyzer-examples/1')
        await flushStore();
        assert.equal('inited', 'inited');
    });
});