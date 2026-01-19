import rspack from '@rspack/core';

import type { GetPresetDefaultOptions, Preset } from '~/types';

import type { NodePresetOptions } from './node-preset';
import { getNodePresetDefaultOptions } from './node-preset';

export type FivemScriptPresetOptions = NodePresetOptions;

export const getFivemScriptPresetDefaultOptions: GetPresetDefaultOptions<
    FivemScriptPresetOptions
> = (options, context) => ({
    ...getNodePresetDefaultOptions(options, context),
    nodeVersion: options.nodeVersion ?? 16,
});

export const fivemScriptPreset: Preset<FivemScriptPresetOptions> = (options, context) => ({
    name: 'fivem-script-preset',

    devtool: false,

    externals: [],

    optimization: { minimize: context.isProduction },

    plugins: [new rspack.EnvironmentPlugin(options.envVariables)],
});
