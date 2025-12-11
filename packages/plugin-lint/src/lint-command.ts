import { Command } from '@jpp-toolkit/core';
import { buildEslintArgs, buildPrettierArgs, findProjectRoot } from '@jpp-toolkit/utils';
import { Flags } from '@oclif/core';
import { execa } from 'execa';

export class LintCommand extends Command {
    static override summary = 'Run code linting on the project source code.';

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

        const cwd = flags.root ? findProjectRoot() : process.cwd();
        const mode = flags.format ? 'formatting' : 'linting';

        this.logger.info(`Running Prettier ${mode}...`);
        const prettierResult = await execa(
            'prettier',
            buildPrettierArgs({ format: flags.format }),
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
        const eslintResult = await execa('eslint', buildEslintArgs({ format: flags.format }), {
            cwd,
            stdio: 'inherit',
            preferLocal: true,
            reject: false,
        });
        if (eslintResult.failed) this.logger.error(`ESLint ${mode} failed.`);
        else this.logger.success(`ESLint ${mode} completed successfully.`);
        this.logger.log();

        if (!prettierResult.failed && !eslintResult.failed) {
            this.logger.success(`Linting process completed successfully.`);
        } else {
            this.fatalError(`Linting process encountered issues.`);
        }
    }
}
