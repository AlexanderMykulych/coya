import { useNeo4jResult } from 'coya-ts-analyzer';
import { resolve } from 'path';
import Piscina from 'piscina'

const piscina = new Piscina({
  filename: resolve(__dirname, './worker.js'),
});

export default <useNeo4jResult>{
  verifyConnection() {
    // return piscina.run(null, { name: 'verifyConnection' })
  },
}