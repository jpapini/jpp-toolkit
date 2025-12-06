import { ChangesetCommand } from './changeset-command';

export class TagChangesetCommand extends ChangesetCommand {
    static override summary = 'Creates git tags for the current version of all packages.';

    static override description = `
The tag command creates git tags for the current version of all packages. The tags created are
equivalent to those created by changeset publish, but the tag command does not publish anything to
npm.

This is helpful in situations where a different tool, such as pnpm publish -r, is used to publish
packages instead of changeset. For situations where changeset publish is executed, running changeset
tag is not needed.

The git tags in monorepos are created in the format pkg-name@version-number and are based on the
current version number of the package.json for each package. Note that in single-package
repositories, the git tag will include v before the version number, for example, v1.0.0. It is
expected that changeset version is run before changeset tag, so the package.json versions are
updated before the git tags are created.
`;

    public async run(): Promise<void> {
        await this._execChangeset(['tag']);
    }
}
