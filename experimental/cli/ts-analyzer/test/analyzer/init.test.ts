import { assert, test, it } from 'vitest';
import { flushStore } from '../../src/analyzer/addRelation';
import { analyze, init } from './../../src/analyzer/init';

test('init', async () => {
    // analyze('/home/alex/RiderProjects/Coya/Coya/experimental/cli/ts-analyzer-examples/1')
    analyze('/home/alex/RiderProjects/Coya/Coya/libraries/core')
    await flushStore('/home/alex/RiderProjects/Coya/Coya');
    assert.equal('inited', 'inited');
}, 20000);