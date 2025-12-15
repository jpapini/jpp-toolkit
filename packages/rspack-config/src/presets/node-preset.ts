import type { ExternalItem, SwcLoaderOptions } from '@rspack/core';
import nodeExternals from 'webpack-node-externals';

import { TS_RULE_TEST } from '~/constants';
import { NodeContext } from '~/contexts';
import type { PresetFunc } from '~/types';

export const createNodePreset: PresetFunc = (context) => {
    if (!(context instanceof NodeContext)) throw new Error('Invalid context');

    return {
        name: 'node',

        target: 'browserslist:node 24',

        node: {
            global: false,
            __dirname: false,
            __filename: false,
        },

        externalsPresets: { node: true },
        externals: [nodeExternals() as ExternalItem],

        module: {
            rules: [
                {
                    test: TS_RULE_TEST,
                    loader: 'builtin:swc-loader',
                    options: {
                        env: { targets: 'node 24' },
                    } satisfies SwcLoaderOptions,
                },
            ],
        },
    };
};
