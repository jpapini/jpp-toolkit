import path from 'node:path';

import { Command } from '@jpp-toolkit/core';
import { createTsdownConfig } from '@jpp-toolkit/tsdown-config';
import { Args, Flags } from '@oclif/core';
import { build as tsdownBuild } from 'tsdown';

const Preset = {
    ESM: 'esm',
    CJS: 'cjs',
    HYBRID: 'hybrid',
} as const;
type Preset = (typeof Preset)[keyof typeof Preset];

const presetFormatMap = {
    [Preset.ESM]: ['esm' as const],
    [Preset.CJS]: ['cjs' as const],
    [Preset.HYBRID]: ['esm' as const, 'cjs' as const],
};

export class LibBuildCommand extends Command {
    static override summary = 'Build the project using predefined library build presets.';

    static override args = {
        preset: Args.string({
            name: 'preset',
            required: true,
            description: 'The build preset to use.',
            options: Object.values(Preset),
        }),
    };

    static override flags = {
        watch: Flags.boolean({
            char: 'w',
            description: 'Watch files for changes and rebuild automatically.',
            default: false,
        }),
        entry: Flags.string({
            char: 'e',
            description: 'The entry file for the build process.',
        }),
    };

    static override examples = [
        {
            description: 'Build the library using the esm preset.',
            command: '<%= config.bin %> <%= command.id %> esm',
        },
        {
            description: 'Build the library using the cjs preset.',
            command: '<%= config.bin %> <%= command.id %> cjs',
        },
        {
            description: 'Build the library using the hybrid preset.',
            command: '<%= config.bin %> <%= command.id %> hybrid',
        },
        {
            description: 'Build the library and watch for changes.',
            command: '<%= config.bin %> <%= command.id %> esm --watch',
        },
        {
            description: 'Build the library with a custom entry file.',
            command: '<%= config.bin %> <%= command.id %> esm --entry src/main.ts',
        },
    ];

    public async run(): Promise<void> {
        const { args, flags } = await this.parse(LibBuildCommand);
        const preset = args.preset as Preset;
        const { watch, entry } = flags;

        this.logger.info(`Building library using the '${preset}' preset...`);

        if (entry) {
            this.logger.info(`Using custom entry file: ${entry}`);
        }

        const format = presetFormatMap[preset];
        const config = createTsdownConfig({
            format,
            watch,
            ...(entry ? { entry: path.resolve(process.cwd(), entry) } : {}),
        });
        await tsdownBuild(config);
    }
}
