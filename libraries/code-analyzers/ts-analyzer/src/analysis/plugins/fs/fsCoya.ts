import { dirname } from "path";
import type { AnalysisContext } from "../../context/analysisContext";
import type { FileFsUnit, FolderFsUnit, FsUnit } from "../../fs/types";
import { CodeInfo, CodeInfoType, EntityType, Relationship, RelationType } from "../../types";
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
      .map<CodeInfo>(x => ({
        type: CodeInfoType.Entity,
        entityType: x.type === 'file' ? EntityType.File : EntityType.Folder,
        filePath: x.id,
        id: x.id,
        source: [],
      }))

    const relations = units
      .map<Relationship>(x => ({
        relationType: RelationType.Parent,
        from: dirname(x.id),
        to: x.id,
        type: CodeInfoType.Relationship,
      }))

    context.addCodeInfos(entities)
    context.addCodeInfos(relations)
  },
})
