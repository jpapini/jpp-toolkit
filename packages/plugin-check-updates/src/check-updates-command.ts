import { Command } from '@jpp/core';
import { findProjectRoot } from '@jpp/utils';
import { Flags } from '@oclif/core';
import { run as ncu } from 'npm-check-updates';

export class CheckUpdatesCommand extends Command {
    static override description = 'Check updates for project dependencies.';

    static override flags = {
        root: Flags.boolean({
            char: 'R',
            description: 'Check updates from the project root directory.',
            default: false,
        }),
    };

    static override examples = [
        {
            description: 'Run the check-updates command.',
            command: '<%= config.bin %> <%= command.id %>',
        },
        {
            description: 'Run the check-updates command from the project root directory.',
            command: '<%= config.bin %> <%= command.id %> --root',
        },
    ];

    public async run(): Promise<void> {
        const { flags } = await this.parse(CheckUpdatesCommand);

        const cwd = flags.root ? findProjectRoot() : process.cwd();

        await ncu(
            {
                cwd,
                color: true,
                interactive: true,
                upgrade: true,
                root: true,
                workspaces: true,
                format: ['group'],
                install: 'never',
                dep: ['prod', 'dev', 'peer', 'optional', 'packageManager'],
            },
            { cli: true },
        );
    }
}
