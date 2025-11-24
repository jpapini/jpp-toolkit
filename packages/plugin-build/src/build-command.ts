import { Command } from '@jpp/core';
import { createTsdownConfig } from '@jpp/tsdown-config';
import { Args } from '@oclif/core';
import { build as tsdownBuild } from 'tsdown';

const Preset = {
    LIB_ESM: 'lib-esm',
    LIB_CJS: 'lib-cjs',
    LIB_HYBRID: 'lib-hybrid',
} as const;
type Preset = (typeof Preset)[keyof typeof Preset];

export class BuildCommand extends Command {
    static override description = 'Build the code using predefined presets.';

    static override args = {
        preset: Args.string({
            name: 'preset',
            required: true,
            description: 'The build preset to use.',
            options: Object.values(Preset),
        }),
    };

    static override examples = [
        {
            description: 'Build the code using the lib-esm preset.',
            command: '<%= config.bin %> <%= command.id %> lib-esm',
        },
        {
            description: 'Build the code using the lib-cjs preset.',
            command: '<%= config.bin %> <%= command.id %> lib-cjs',
        },
        {
            description: 'Build the code using the lib-hybrid preset.',
            command: '<%= config.bin %> <%= command.id %> lib-hybrid',
        },
    ];

    public async run(): Promise<void> {
        const { args } = await this.parse(BuildCommand);
        const preset = args.preset as Preset;

        this.logger.info(`Building using the '${preset}' preset...`);

        switch (preset) {
            case Preset.LIB_ESM:
                await tsdownBuild(createTsdownConfig({ format: ['esm'] }));
                break;
            case Preset.LIB_CJS:
                await tsdownBuild(createTsdownConfig({ format: ['cjs'] }));
                break;
            case Preset.LIB_HYBRID:
                await tsdownBuild(createTsdownConfig({ format: ['esm', 'cjs'] }));
                break;
            default:
                this.logger.error(`Unknown preset: ${preset}`);
                process.exit(1);
        }
    }
}
