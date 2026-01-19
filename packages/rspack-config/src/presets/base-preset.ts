import path from 'node:path';

import type { SwcLoaderOptions } from '@rspack/core';
import { rspack } from '@rspack/core';

import { TS_RULE_TEST } from '~/constants';
import type { GetPresetDefaultOptions, Preset } from '~/types';

export type BasePresetOptions = {
    readonly entryFile: string;
    readonly tsconfigFile: string;
    readonly outDir: string;
    readonly envVariables: Record<string, string | undefined>;
    readonly useDecorators: boolean;
    readonly watchIgnored: string[];
};

export const getBasePresetDefaultOptions: GetPresetDefaultOptions<BasePresetOptions> = (
    options,
) => ({
    entryFile: options.entryFile ?? 'src/index.js',
    tsconfigFile: options.tsconfigFile ?? 'tsconfig.json',
    outDir: options.outDir ?? 'dist',
    envVariables: options.envVariables ?? {},
    useDecorators: options.useDecorators ?? false,
    watchIgnored: options.watchIgnored ?? [
        '**/.git',
        '**/.turbo',
        '**/coverage',
        '**/dist',
        '**/generated',
        '**/old',
        '**/tmp',
    ],
});

export const basePreset: Preset<BasePresetOptions> = (options, context) => ({
    name: 'base-preset',

    context: context.cwd,
    mode: context.isProduction ? 'production' : 'development',
    cache: !context.isProduction,

    entry: { main: options.entryFile },

    output: {
        clean: true,
        path: path.resolve(context.cwd, options.outDir),
    },

    resolve: {
        tsConfig: path.resolve(context.cwd, options.tsconfigFile),
        extensions: ['.ts', '...'],
        extensionAlias: {
            '.js': ['.ts', '.js'],
            '.cts': ['.cts', '.js'],
            '.mjs': ['.mts', '.mjs'],
        },
    },

    optimization: { minimize: context.isProduction },

    module: {
        rules: [
            {
                test: TS_RULE_TEST,
                type: 'javascript/auto',
                loader: 'builtin:swc-loader',
                exclude: [/dist\//u, /node_modules\//u],
                options: {
                    jsc: {
                        externalHelpers: false,
                        keepClassNames: true,
                        parser: {
                            syntax: 'typescript',
                            decorators: options.useDecorators,
                        },
                        transform: {
                            useDefineForClassFields: true,
                            legacyDecorator: options.useDecorators,
                            decoratorMetadata: options.useDecorators,
                        },
                        experimental: {
                            cacheRoot: path.resolve(context.cwd, 'node_modules/.cache/swc'),
                        },
                    },
                } satisfies SwcLoaderOptions,
            },
        ],
    },

    experiments: {
        cache: {
            type: 'persistent',
            storage: {
                type: 'filesystem',
                directory: path.resolve(context.cwd, 'node_modules/.cache/rspack'),
            },
        },
    },

    stats: {
        preset: 'normal',
        errorDetails: true,
        colors: true,
    },

    watchOptions: {
        aggregateTimeout: 200,
        ignored: options.watchIgnored,
    },

    plugins: [new rspack.EnvironmentPlugin(options.envVariables)],
});
