import { definePlugin } from "../definePlugin";
import { init } from "./init";
import { run } from "./run";



export default definePlugin({
  name: 'ts-js-coya',
  matchFolders: (context) => context.getFolders(x => x.folder.relativePath === '.'),
  init,
  run,
})
