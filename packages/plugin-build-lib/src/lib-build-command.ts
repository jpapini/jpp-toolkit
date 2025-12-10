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
    ];

    public async run(): Promise<void> {
        const { args, flags } = await this.parse(LibBuildCommand);
        const preset = args.preset as Preset;
        const { watch } = flags;

        this.logger.info(`Building library using the '${preset}' preset...`);

        const format = presetFormatMap[preset];
        const config = createTsdownConfig({ format, watch });
        await tsdownBuild(config);
    }
}
