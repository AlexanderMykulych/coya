import { RushConfiguration } from '@microsoft/rush-lib';
import { VersionMismatchFinder } from '@microsoft/rush-lib/lib/logic/versionMismatch/VersionMismatchFinder';
import { PackageJsonUpdater } from '@microsoft/rush-lib/lib/logic/PackageJsonUpdater';
import { RushGlobalFolder } from '@microsoft/rush-lib/lib/api/RushGlobalFolder';

// loadFromDefaultLocation() will search parent folders to find "rush.json" and then
// take care of parsing it and loading related config files.
const rushConfiguration = RushConfiguration.loadFromDefaultLocation({
  startingFolder: process.cwd(),
});

const mismatches = VersionMismatchFinder.getMismatches(rushConfiguration as any);

const updater = new PackageJsonUpdater(rushConfiguration as any, new RushGlobalFolder());

const packages = mismatches.getMismatches()
  .map((x) => {
    const versions = mismatches.getVersionsOfMismatch(x)
      ?.map(v => ({
        version: v,
        val: v
          .replace('^', '')
          .replace('~', '')
          .split('.')
          .map(Number),
      })).sort((x, y) => {
        for (let i = 0; i < 3; i++) {
          if (x.val[i] > y.val[i]) {
            return -1;
          } else if (x.val[i] < y.val[i]) {
            return 1;
          }
        }
        return 1;
      })
      .map(({ version }) => version);

    return {
      packageName: x,
      version: versions![0],
      rangeStyle: 'passthrough',
    };
  });

console.log(packages);

(async () => {
  await updater.doRushAddAsync({
    projects: rushConfiguration.projects as any,
    updateOtherPackages: true,
    debugInstall: false,
    devDependency: false,
    packagesToAdd: packages as any,
    skipUpdate: false,
    });
})();

// console.log('check', mismatches.printAsJson());

// for (const project of rushConfiguration.projects) {
//   console.log(`${project.packageName}:`);
//   console.log(`  ${project.projectRelativeFolder}`);
// }
