import type { ExternalItem, SwcLoaderOptions } from '@rspack/core';
import { rspack } from '@rspack/core';
import { RunScriptWebpackPlugin } from 'run-script-webpack-plugin';
import nodeExternals from 'webpack-node-externals';

import { TS_RULE_TEST } from '~/constants';
import type { GetPresetDefaultOptions, Preset } from '~/types';

import type { BasePresetOptions } from './base-preset';
import { getBasePresetDefaultOptions } from './base-preset';

export type NodePresetOptions = BasePresetOptions & {
    readonly nodeVersion: number;
};

export const getNodePresetDefaultOptions: GetPresetDefaultOptions<NodePresetOptions> = (
    options,
    context,
) => ({
    ...getBasePresetDefaultOptions(options, context),
    nodeVersion: options.nodeVersion ?? 24,
});

export const nodePreset: Preset<NodePresetOptions> = (options, context) => ({
    name: 'node-preset',

    target: `node${options.nodeVersion}`,

    entry: {
        main: [...(context.isServeMode ? ['@rspack/core/hot/poll?100'] : []), options.entryFile],
    },

    externalsPresets: { node: true },
    externalsType: 'commonjs',
    externals: [
        nodeExternals(
            context.isServeMode ? { allowlist: ['@rspack/core/hot/poll?100'] } : undefined,
        ) as ExternalItem,
    ],

    optimization: { minimize: false },

    module: {
        rules: [
            {
                test: TS_RULE_TEST,
                loader: 'builtin:swc-loader',
                options: {
                    env: { targets: `node ${options.nodeVersion}` },
                } satisfies SwcLoaderOptions,
            },
        ],
    },

    devServer: {
        devMiddleware: {
            writeToDisk: true,
        },
    },

    plugins: [
        new rspack.EnvironmentPlugin(options.envVariables),
        context.isServeMode && new RunScriptWebpackPlugin({ name: 'main.js', autoRestart: false }),
    ],
});
