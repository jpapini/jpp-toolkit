import path from 'node:path';

import type { GetPresetDefaultOptions, Preset } from '~/types';

import type { ReactPresetOptions } from './react-preset';
import { getReactPresetDefaultOptions } from './react-preset';

export type FivemUiPresetOptions = ReactPresetOptions & {
    readonly resourceName: string;
};

export const getFivemUiPresetDefaultOptions: GetPresetDefaultOptions<FivemUiPresetOptions> = (
    options,
    context,
) => {
    const resourceName = options.resourceName ?? path.basename(context.cwd);
    const reactPresetOptions = getReactPresetDefaultOptions(options, context);
    return {
        ...reactPresetOptions,
        resourceName,
        publicUrl:
            options.publicUrl
            ?? (context.isServeMode ? 'http://localhost:8080/' : (
                `https://cfx-nui-${resourceName}/${reactPresetOptions.outDir}/`
            )),
    };
};

export const fivemUiPreset: Preset<FivemUiPresetOptions> = (_options, context) => ({
    name: 'fivem-ui-preset',

    ...(context.isProduction ? { devtool: false } : {}),

    output: { filename: '[name].js' },

    devServer: {
        devMiddleware: {
            writeToDisk: true,
        },
    },
});
