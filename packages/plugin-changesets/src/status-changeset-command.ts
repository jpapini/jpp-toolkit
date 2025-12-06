import { Flags } from '@oclif/core';

import { ChangesetCommand } from './changeset-command';

export class StatusChangesetCommand extends ChangesetCommand {
    static override summary = 'Provides information about the changesets that currently exist.';

    static override description = `
The status command provides information about the changesets that currently exist. If there are no
changesets present, it exits with an error status code.
`;

    static override flags = {
        verbose: Flags.boolean({
            char: 'v',
            description:
                'Use if you want to know the new versions, and get a link to the relevant changeset summary.',
            required: false,
            default: false,
        }),
        output: Flags.string({
            char: 'o',
            description:
                'Allows you to write the JSON object of the status output for consumption by other tools, such as CI.',
            required: false,
        }),
        since: Flags.string({
            char: 's',
            description:
                'Only display information about changesets since a specific branch or git tag (such as main, or the git hash of latest).',
            required: false,
        }),
    };

    static override examples = [
        {
            description: 'Get the status of changesets in the project.',
            command: '<%= config.bin %> <%= command.id %>',
        },
        {
            description:
                'Get a verbose status of changesets, including new versions and links to summaries.',
            command: '<%= config.bin %> <%= command.id %> --verbose',
        },
        {
            description: 'Output the status of changesets as a JSON object.',
            command: '<%= config.bin %> <%= command.id %> --output status.json',
        },
        {
            description: 'Get the status of changesets since a specific branch or git tag.',
            command: '<%= config.bin %> <%= command.id %> --since main',
        },
    ];

    public async run(): Promise<void> {
        const { flags } = await this.parse(StatusChangesetCommand);

        const args: string[] = ['status'];
        if (flags.verbose) args.push('--verbose');
        if (flags.output) args.push('--output', flags.output);
        if (flags.since) args.push('--since', flags.since);

        await this._execChangeset(args);
    }
}
