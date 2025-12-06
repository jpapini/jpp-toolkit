import { Flags } from '@oclif/core';

import { ChangesetCommand } from './changeset-command';

export class PublishChangesetCommand extends ChangesetCommand {
    static override summary = 'Publishes changes to npm, and creates git tags.';

    static override description = `
This publishes changes to npm, and creates git tags. This works by going into each package, checking
if the version it has in its package.json is published on npm, and if it is not, running the npm
publish. If you are using pnpm as a package manager, this automatically detects it and uses pnpm
publish instead.
`;

    static override flags = {
        'otp': Flags.string({
            char: 'o',
            description: 'One-time password for publishing to npm.',
            required: false,
        }),
        'tag': Flags.string({
            char: 't',
            description: 'Tag to publish the package under.',
            required: false,
        }),
        'no-git-tag': Flags.boolean({
            description: 'Skip creating a git tag after publishing.',
            required: false,
            default: false,
        }),
    };

    static override examples = [
        {
            description: 'Publish packages to npm and create git tags.',
            command: '<%= config.bin %> <%= command.id %>',
        },
        {
            description: 'Publish packages with a one-time password.',
            command: '<%= config.bin %> <%= command.id %> --otp 123456',
        },
        {
            description: 'Publish packages under a specific tag.',
            command: '<%= config.bin %> <%= command.id %> --tag beta',
        },
        {
            description: 'Publish packages without creating git tags.',
            command: '<%= config.bin %> <%= command.id %> --no-git-tag',
        },
    ];

    public async run(): Promise<void> {
        const { flags } = await this.parse(PublishChangesetCommand);

        const args: string[] = ['publish'];
        if (flags.otp) args.push('--otp', flags.otp);
        if (flags.tag) args.push('--tag', flags.tag);
        if (flags['no-git-tag']) args.push('--no-git-tag');

        await this._execChangeset(args);
    }
}
