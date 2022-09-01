import { analyzeCode } from '../analysis/analyzeCode';
import { CodeInfoType } from '../analysis/types';
import type { Entity, EntityLogLocation } from '../analysis/types';


export async function transform(code: string, id: string): Promise<string> {
  const codeInfos = await analyzeCode({
    code,
    fileName: id,
  });

  const entities = codeInfos
    .filter((x): x is Entity & EntityLogLocation => x.type === CodeInfoType.Entity && !!x.logStart)
    .sort((a, b) => a.logStart > b.logStart ? -1 : 1);


  entities.forEach(entity => {
    const pos = entity.logStart + 1
    code = code.slice(0, pos) + `/* ${entity.id} */` + code.slice(pos);
  });

  return code;
}
