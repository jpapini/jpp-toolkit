import path from 'node:path';

import { Command } from '@jpp/core';
import { findGitIgnore, findProjectRoot } from '@jpp/utils';
import { Flags } from '@oclif/core';
import { execa } from 'execa';

const PRETTIER_PATTERNS = [
    '**/*',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/generated/**',
    '!**/pnpm-lock.yaml',
    '!**/*.hbs',
];

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
        const gitIgnore = findGitIgnore();
        const cwd = flags.root ? projectRoot : process.cwd();

        const cacheDir = path.join(projectRoot, 'node_modules/.cache');
        const prettierCache = path.join(cacheDir, 'prettier/.prettiercache');
        const eslintCache = path.join(cacheDir, 'eslint/.eslintcache');

        const mode = flags.format ? 'formatting' : 'linting';

        this.logger.info(`Running Prettier ${mode}...`);
        const prettierResult = await execa(
            'prettier',
            [
                '--cache',
                '--cache-location',
                prettierCache,
                '--ignore-path',
                gitIgnore,
                '--ignore-unknown',
                flags.format ? '--write' : '--check',
                ...PRETTIER_PATTERNS,
            ],
            {
                cwd,
                stdio: 'inherit',
                preferLocal: true,
                reject: false,
            },
        );
        if (prettierResult.failed) this.logger.error(`Prettier ${mode} failed.`);
        else this.logger.success(`Prettier ${mode} completed successfully.`);
        this.logger.log();

        this.logger.info(`Running ESLint ${mode}...`);
        const eslintResult = await execa(
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
                preferLocal: true,
                reject: false,
            },
        );
        if (eslintResult.failed) this.logger.error(`ESLint ${mode} failed.`);
        else this.logger.success(`ESLint ${mode} completed successfully.`);
        this.logger.log();

        if (!prettierResult.failed && !eslintResult.failed) {
            this.logger.success(`Linting process completed successfully.`);
        } else {
            this.logger.error(`Linting process encountered issues.`);
            process.exit(1);
        }
    }
}
