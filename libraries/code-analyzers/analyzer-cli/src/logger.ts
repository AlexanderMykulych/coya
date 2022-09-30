import pino from 'pino'
import pretty from 'pino-pretty'
import { loggerTransport } from './loggerTransport'

export const cliLogger = pino({
  name: 'cli',
  
}, pino.multistream([
  {
    stream: pretty(),
  },
  {
    stream: loggerTransport(),
  },
]))


