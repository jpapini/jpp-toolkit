import path from 'node:path';

import { Command } from '@jpp-toolkit/core';
import { findProjectRoot } from '@jpp-toolkit/utils';
import { Flags } from '@oclif/core';
import { execa } from 'execa';
import { rimraf } from 'rimraf';

const RESET_PATTERNS = ['!old', '!tmp'];
const CLEAN_PATTERNS = [
    ...RESET_PATTERNS,
    '!node_modules',
    '!node_modules/**',
    '**/node_modules/.cache',
    '!**/hooks/_',
    '!**/hooks/_/**',
    '!.env',
];

export class CleanCommand extends Command {
    static override summary = 'Remove build artifacts and temporary files from the project.';

    static override flags = {
        'dry-run': Flags.boolean({
            char: 'd',
            description: 'Perform a dry run without deleting files.',
            default: false,
        }),
        'reset': Flags.boolean({
            char: 'r',
            description: 'Reset the project to a clean state.',
            default: false,
        }),
        'root': Flags.boolean({
            char: 'R',
            description: 'Clean from the project root directory.',
            default: false,
        }),
    };

    static override examples = [
        {
            description: 'Perform a dry run of the clean command.',
            command: '<%= config.bin %> <%= command.id %> --dry-run',
        },
        {
            description: 'Reset the project to a clean state.',
            command: '<%= config.bin %> <%= command.id %> --reset',
        },
        {
            description: 'Clean from the project root directory.',
            command: '<%= config.bin %> <%= command.id %> --root',
        },
    ];

    public async run(): Promise<void> {
        const { flags } = await this.parse(CleanCommand);

        const cwd = flags.root ? findProjectRoot() : process.cwd();
        const patterns = flags.reset ? RESET_PATTERNS : CLEAN_PATTERNS;

        const { stdout } = await execa(
            'git',
            [
                'ls-files',
                '--others',
                '--ignored',
                '--exclude-standard',
                '--directory',
                ...patterns.map((pattern) => `--exclude=${pattern}`),
            ],
            { cwd, lines: true },
        );

        const paths = stdout
            .filter((line) => line.trim().length > 0)
            .map((filePath) => path.resolve(cwd, filePath));

        if (paths.length === 0) {
            this.logger.info('No files to clean');
            return;
        }

        if (flags['dry-run']) {
            this.logger.info('The following files would be removed:');
            this.logger.paths(paths);
            return;
        }

        await rimraf(paths);

        this.logger.success('Cleaned the following files:');
        this.logger.paths(paths);
    }
}
