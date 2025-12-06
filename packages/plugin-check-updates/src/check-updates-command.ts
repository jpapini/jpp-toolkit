import { Command } from '@jpp-toolkit/core';
import { findProjectRoot } from '@jpp-toolkit/utils';
import { Flags } from '@oclif/core';
import { run as ncu } from 'npm-check-updates';

export class CheckUpdatesCommand extends Command {
    static override summary = 'Check updates for project dependencies.';

    static override flags = {
        workspace: Flags.boolean({
            char: 'w',
            description: 'Check updates for all workspaces in a monorepo.',
            default: false,
        }),
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
            description: 'Run the check-updates command for all workspaces in a monorepo.',
            command: '<%= config.bin %> <%= command.id %> --workspace',
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
                format: ['group'],
                install: 'never',
                dep: ['prod', 'dev', 'optional', 'packageManager'],

                ...(flags.workspace ?
                    {
                        root: true,
                        workspaces: true,
                    }
                :   {}),
            },
            { cli: true },
        );
    }
}
