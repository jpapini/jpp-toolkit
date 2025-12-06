import { Flags } from '@oclif/core';

import { ChangesetCommand } from './changeset-command';

export class AddChangesetCommand extends ChangesetCommand {
    static override summary = 'Add a new changeset to the project.';

    static override description = `
This is the main command people use to interact with the changesets.

This command will ask you a series of questions, first about what packages you want to release,
then what semver bump type for each package, then it will ask for a summary of the entire changeset.
The final step will show the changeset it will generate and confirm that you want to add it.

Once confirmed, the changeset will be written a Markdown file that contains the summary and YAML
front matter which stores the packages that will be released and the semver bump types for them.
`;

    static override flags = {
        empty: Flags.boolean({
            char: 'e',
            description: 'Create an empty changeset without prompts.',
            default: false,
        }),
        open: Flags.boolean({
            char: 'o',
            description: 'Open the changeset in the default editor after creating it.',
            default: false,
        }),
    };

    static override examples = [
        {
            description: 'Add a new changeset to the project.',
            command: '<%= config.bin %> <%= command.id %>',
        },
        {
            description: 'Add an empty changeset without any prompts.',
            command: '<%= config.bin %> <%= command.id %> --empty',
        },
        {
            description: 'Add a new changeset and open it in the default editor.',
            command: '<%= config.bin %> <%= command.id %> --open',
        },
    ];

    public async run(): Promise<void> {
        const { flags } = await this.parse(AddChangesetCommand);

        const args: string[] = ['add'];
        if (flags.empty) args.push('--empty');
        if (flags.open) args.push('--open');

        await this._execChangeset(args);
    }
}
