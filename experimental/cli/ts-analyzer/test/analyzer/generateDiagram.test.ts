import { assert, describe, it } from 'vitest';
import { flushStore } from '../../src/analyzer/addRelation';
import { generateDiagram } from './../../src/diagram/generateDiagram';

describe('generate diagram', () => {
    it('generate', async () => {
        await generateDiagram()
        assert.equal('inited', 'inited');
    });
});