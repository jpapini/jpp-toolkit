import { Args } from '@oclif/core';

import { ChangesetCommand } from './changeset-command';

export class PreChangesetCommand extends ChangesetCommand {
    static override summary = 'Enters and exits pre-release mode for packages.';

    static override description = `
The pre command enters and exits pre mode. The command does not do any actual versioning, when doing
a pre-release, you should run changeset pre enter next(or a different tag, the tag is what is in
versions and is the npm dist tag) and then do the normal release process with changeset version and
changeset publish.
`;

    static override args = {
        action: Args.string({
            name: 'action',
            required: true,
            description: 'The pre-release action to perform.',
            options: ['enter', 'exit'],
        }),
        tag: Args.string({
            name: 'tag',
            required: false,
            description: 'The pre-release tag to use when entering pre-release mode.',
        }),
    };

    static override examples = [
        {
            description: 'Enter pre-release mode with the "next" tag.',
            command: '<%= config.bin %> <%= command.id %> enter next',
        },
        {
            description: 'Exit pre-release mode.',
            command: '<%= config.bin %> <%= command.id %> exit',
        },
    ];

    public async run(): Promise<void> {
        const { args } = await this.parse(PreChangesetCommand);

        const commandArgs: string[] = ['pre', args.action];
        if (args.action === 'enter' && args.tag) commandArgs.push('--tag', args.tag);

        await this._execChangeset(commandArgs);
    }
}
