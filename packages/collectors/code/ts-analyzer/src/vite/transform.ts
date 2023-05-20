import { analyzeCode } from '../analysis/analyzeCode';
import { CodeInfoType } from '../analysis/types';
import type { Entity, EntityLogLocation } from '../analysis/types';

export type TransformConfigInjector = (args: string) => string
export type TransformConfigAfter = (code: string) => string
export type TransformConfigSkip = (id: string) => boolean

export type TransformConfig = {
  startInject?: TransformConfigInjector
  endInject?: TransformConfigInjector
  afterTransform?: TransformConfigAfter
  skipTransformation?: TransformConfigSkip
}
export async function transform(code: string, id: string, config?: TransformConfig): Promise<string | undefined> {
  if (config?.skipTransformation && config.skipTransformation(id)) {
    return
  }
  const codeInfos = await analyzeCode({
    code,
    fileName: id,
  });

  const entities = codeInfos
    .filter((x): x is Entity & EntityLogLocation =>
      x.type === CodeInfoType.Entity && !!x.logStart && !!x.logEnd
  )
  const startEntities = entities.map(x => ({
    ...x,
    injectIndex: x.logStart + 1,
    injectType: 'start',
  }))
  const endEntities = entities.map(x => ({
    ...x,
    injectIndex: x.logEnd - 1,
    injectType: 'end',
  }))
  const sortedEntities = [...startEntities, ...endEntities]
    .sort((a, b) => a.injectIndex > b.injectIndex ? -1 : 1);

  const defaultInject: TransformConfigInjector = args => `/* ${args} */`
  const startInject: TransformConfigInjector = config?.startInject
    ?? defaultInject
  
  const endInject: TransformConfigInjector = config?.endInject
    ?? defaultInject
  
  sortedEntities.forEach(entity => {
    const pos = entity.injectIndex
    const inject = entity.injectType === 'start' ? startInject : endInject

    const before = code.slice(0, pos)
    const after = code.slice(pos)

    if (entity.injectType === 'start') {
      code = `${before}
try {
${inject(JSON.stringify(entity.id))}
${after}
`
    } else {
      code = `${before}
} finally {
  ${inject(JSON.stringify(entity.id))}
}
${after}`
    }
    
  });

  if (config?.afterTransform) {
    code = config.afterTransform(code)
  }
  return code;
}
