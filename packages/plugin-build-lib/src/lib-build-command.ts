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
            description: 'The entry file(s) or glob(s) for the build process. Can be repeated.',
            multiple: true,
        }),
        unbundle: Flags.boolean({
            description:
                'Preserve the source module structure in the output (one file per source module) instead of bundling.',
            default: false,
        }),
        root: Flags.string({
            description:
                'Root directory of the input files, used to compute output paths in unbundle mode.',
        }),
        shims: Flags.boolean({
            description:
                'Inject node:path / node:url / import.meta.url shims into emitted files (use --no-shims to disable).',
            allowNo: true,
            default: true,
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
        {
            description:
                'Build the library preserving the source module structure from multiple entries/globs.',
            command:
                "<%= config.bin %> <%= command.id %> esm --unbundle -e lib/index.ts -e 'generated/**/*.ts'",
        },
        {
            description:
                'Build the library without injecting node:path / node:url / import.meta.url shims.',
            command: '<%= config.bin %> <%= command.id %> esm --no-shims',
        },
    ];

    public async run(): Promise<void> {
        const { args, flags } = await this.parse(LibBuildCommand);
        const preset = args.preset as Preset;
        const { watch, entry, unbundle, root, shims } = flags;

        this.logger.info(`Building library using the '${preset}' preset...`);

        if (entry?.length) {
            this.logger.info(`Using custom entry file(s): ${entry.join(', ')}`);
        }

        const format = presetFormatMap[preset];
        const config = createTsdownConfig({
            format,
            watch,
            shims,
            ...(entry?.length ? { entry } : {}),
            ...(unbundle ? { unbundle: true } : {}),
            ...(root ? { root } : {}),
        });
        await tsdownBuild(config);
    }
}
