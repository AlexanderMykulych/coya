import { dirname } from "path";
import type { AnalysisContext } from "../../context/analysisContext";
import type { FileFsUnit, FolderFsUnit } from "../../fs/types";
import { CodeInfoType, EntityType, FSEntity, Relationship, RelationType } from "../../types";
import { definePlugin } from "../definePlugin";

export default definePlugin({
  name: 'fs-coya',
  matchFolders: (context) =>
    context.getFolders(x => x.folder.relativePath === '.'),
  async run(context: AnalysisContext): Promise<void> {
    const units = context
      .fsUnits
      .filter((x): x is FileFsUnit | FolderFsUnit => x.type === 'file' || x.type === 'folder')
      .map(x => ({
        ...x,
        id: x.relativePath === '.' ? '/' : `/${x.relativePath}`,
      }))

    const entities = units
      .map<FSEntity>(x => ({
        type: CodeInfoType.Entity,
        entityType: x.type === 'file' ? EntityType.File : EntityType.Folder,
        filePath: x.id,
        id: x.id,
      }))

    const relations = units
      .map<Relationship>(x => ({
        id: `${dirname(x.id)}->${x.id}`,
        type: CodeInfoType.Relationship,
        relationType: RelationType.Parent,
        from: dirname(x.id),
        to: x.id,
        meta_source: 'fs-coya',
      }))

    await context.addCodeInfos(entities)
    await context.addCodeInfos(relations)
  },
})
