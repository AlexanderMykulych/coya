import { definePlugin } from "../definePlugin";
import { run } from "./run";

export default definePlugin({
  name: 'fs-coya',
  matchFolders: (context) =>
  context.getFolders(x => x.folder.relativePath === '.'),
  run,
})
