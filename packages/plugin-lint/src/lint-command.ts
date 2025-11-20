import path from 'node:path';

import { Command } from '@jpp/core';
import { findProjectRoot } from '@jpp/utils';
import { Flags } from '@oclif/core';
import { execa } from 'execa';

const PRETTIER_PATTERNS = ['**/*', '!**/pnpm-lock.yaml', '!**/*.hbs'];

export class LintCommand extends Command {
    static override description = 'Run code linting on the project source code.';

    static override flags = {
        format: Flags.boolean({
            char: 'f',
            description: 'Automatically fix linting issues.',
            default: false,
        }),
        root: Flags.boolean({
            char: 'R',
            description: 'Lint from the project root directory.',
            default: false,
        }),
    };

    static override examples = [
        {
            description: 'Run the lint command.',
            command: '<%= config.bin %> <%= command.id %>',
        },
        {
            description: 'Run the lint command and automatically fix issues.',
            command: '<%= config.bin %> <%= command.id %> --format',
        },
        {
            description: 'Run the lint command from the project root directory.',
            command: '<%= config.bin %> <%= command.id %> --root',
        },
    ];

    public async run(): Promise<void> {
        const { flags } = await this.parse(LintCommand);

        const projectRoot = findProjectRoot();
        const cwd = flags.root ? projectRoot : process.cwd();

        const cacheDir = path.join(projectRoot, 'node_modules/.cache');
        const prettierCache = path.join(cacheDir, 'prettier/.prettiercache');
        const eslintCache = path.join(cacheDir, 'eslint/.eslintcache');

        try {
            this.logger.info(`Running Prettier ${flags.format ? 'formatting' : 'linting'}...`);
            await execa(
                'prettier',
                [
                    '--cache',
                    '--cache-location',
                    prettierCache,
                    '--ignore-unknown',
                    flags.format ? '--write' : '--check',
                    ...PRETTIER_PATTERNS,
                ],
                {
                    cwd,
                    stdio: 'inherit',
                },
            );

            this.logger.info(`Running ESLint ${flags.format ? 'formatting' : 'linting'}...`);
            await execa(
                'eslint',
                [
                    '--flag',
                    'v10_config_lookup_from_file',
                    '--cache',
                    '--cache-location',
                    eslintCache,
                    ...(flags.format ? ['--fix'] : []),
                    '.',
                ],
                {
                    cwd,
                    stdio: 'inherit',
                },
            );

            this.logger.success(
                `${flags.format ? 'Formatting' : 'Linting'} completed successfully.`,
            );
        } catch {
            this.logger.error(`${flags.format ? 'Formatting' : 'Linting'} failed.`);
            process.exit(1);
        }
    }
}
