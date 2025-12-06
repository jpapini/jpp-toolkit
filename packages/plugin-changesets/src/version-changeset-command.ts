import { Flags } from '@oclif/core';

import { ChangesetCommand } from './changeset-command';

export class VersionChangesetCommand extends ChangesetCommand {
    static override summary =
        'Takes changesets that have been made and updates versions and dependencies of packages, as well as writing changelogs.';

    static override description = `
This is one of two commands responsible for releasing packages. The version command takes changesets
that have been made and updates versions and dependencies of packages, as well as writing
changelogs. It is responsible for all file changes to versions before publishing to npm.
`;

    static override flags = {
        ignore: Flags.string({
            char: 'i',
            description: 'Comma-separated list of packages to ignore when versioning.',
            required: false,
        }),
        snapshot: Flags.string({
            char: 's',
            description: 'Create snapshot versions with the given tag.',
            required: false,
        }),
    };

    static override examples = [
        {
            description: 'Version packages based on changesets.',
            command: '<%= config.bin %> <%= command.id %>',
        },
        {
            description: 'Version packages while ignoring specific packages.',
            command: '<%= config.bin %> <%= command.id %> --ignore package-a,package-b',
        },
        {
            description: 'Version packages with snapshot versions.',
            command: '<%= config.bin %> <%= command.id %> --snapshot beta',
        },
    ];

    public async run(): Promise<void> {
        const { flags } = await this.parse(VersionChangesetCommand);

        const args: string[] = ['version'];
        if (flags.ignore) args.push('--ignore', flags.ignore);
        if (flags.snapshot) args.push('--snapshot', flags.snapshot);

        await this._execChangeset(args);
    }
}
