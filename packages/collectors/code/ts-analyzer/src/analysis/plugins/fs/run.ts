import { dirname } from "path";
import { trackFn } from "../../../progress/trackFn";
import { TrackType } from "../../../progress/trackTypes";
import type { AnalysisContext } from "../../context/analysisContextType";
import type { FileFsUnit, FolderFsUnit } from "../../fs/types";
import { CodeInfoType, EntityType, FSEntity, Relationship, RelationType } from "../../types";

async function _run(context: AnalysisContext): Promise<void> {
  const units = context
    .fsUnits
    .filter((x): x is FileFsUnit | FolderFsUnit => x.type === 'file' || x.type === 'folder')
    .map(x => ({
      ...x,
      id: x.relativePath === '.' ? '/' : `/${x.relativePath}`,
    }));

  const entities = units
    .map<FSEntity>(x => ({
      type: CodeInfoType.Entity,
      entityType: x.type === 'file' ? EntityType.File : EntityType.Folder,
      filePath: x.id,
      id: x.id,
    }));

  const relations = units
    .map<Relationship>(x => ({
      id: `${dirname(x.id)}->${x.id}`,
      type: CodeInfoType.Relationship,
      relationType: RelationType.Parent,
      from: dirname(x.id),
      to: x.id,
      meta_source: 'fs-coya',
    }));

  await context.addCodeInfos(entities);
  await context.addCodeInfos(relations);
}

export const run = trackFn(
  _run,
  {
    name: 'run fs-coya',
    type: TrackType.Analyzer,
    objectExtractor: () => ({
      msg: 'fs',
    }),
  },
)