import { definePlugin } from "../definePlugin";
import git from 'nodegit'

export const gitPlugin = definePlugin({
  name: 'git',
  matchFolders: (context) => context.getFolders(x => x.folder.relativePath === '.'),
  async run(context) {
    const repo = await git.Repository.open(context.rootDir)
    
  },
})
