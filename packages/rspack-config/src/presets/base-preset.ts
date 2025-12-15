import rspack from '@rspack/core';
import type { SwcLoaderOptions } from '@rspack/core';

import { TS_RULE_TEST } from '~/constants';
import type { PresetFunc } from '~/types';

export const createBasePreset: PresetFunc = (context) => {
    return {
        name: 'base',

        context: context.cwd,
        mode: context.isProduction ? 'production' : 'development',

        resolve: {
            extensions: ['...', '.ts'],
            extensionAlias: {
                '.js': ['.ts', '.js'],
                '.cjs': ['.cts', '.cjs'],
                '.mjs': ['.mts', '.mjs'],
            },
            tsConfig: context.tsconfigFile,
        },

        entry: context.entryFile,

        output: {
            path: context.outDir,
            clean: true,
        },

        optimization: {
            minimize: context.isProduction,
            nodeEnv: context.nodeEnv,
        },
        stats: { errorDetails: true, colors: true },

        module: {
            rules: [
                {
                    test: TS_RULE_TEST,
                    type: 'javascript/auto',
                    exclude: [/dist\//u, /node_modules\//u],
                    loader: 'builtin:swc-loader',
                    options: {
                        minify: context.isProduction,
                        module: { type: 'nodenext' },
                        jsc: {
                            parser: {
                                syntax: 'typescript',
                                decorators: context.useDecorators,
                            },
                            transform: {
                                useDefineForClassFields: true,
                                legacyDecorator: context.useDecorators,
                                decoratorMetadata: context.useDecorators,
                            },
                            keepClassNames: true,
                            externalHelpers: false,
                        },
                    } satisfies SwcLoaderOptions,
                },
            ],
        },

        plugins: [new rspack.EnvironmentPlugin(context.envVars)],

        watchOptions: {
            aggregateTimeout: 200,
            ignored: [
                '**/.git',
                '**/.turbo',
                '**/coverage',
                '**/dist',
                '**/generated',
                '**/old',
                '**/tmp',
            ],
        },

        cache: !context.isProduction,
        experiments: {
            cache: {
                type: 'persistent',
                storage: {
                    type: 'filesystem',
                    directory: context.cacheDir,
                },
            },
        },
    };
};
