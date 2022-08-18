import { RushConfiguration } from '@microsoft/rush-lib';
import { VersionMismatchFinder } from '@microsoft/rush-lib/lib/logic/versionMismatch/VersionMismatchFinder';

// loadFromDefaultLocation() will search parent folders to find "rush.json" and then
// take care of parsing it and loading related config files.
const rushConfiguration = RushConfiguration.loadFromDefaultLocation({
  startingFolder: process.cwd(),
});

const res = VersionMismatchFinder.getMismatches(rushConfiguration as any, {

});

console.log('check', res.printAsJson());
for (const project of rushConfiguration.projects) {
  console.log(`${project.packageName}:`);
  console.log(`  ${project.projectRelativeFolder}`);
}
