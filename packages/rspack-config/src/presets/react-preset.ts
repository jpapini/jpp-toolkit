import rspack from '@rspack/core';
import type { SwcLoaderOptions } from '@rspack/core';
import ReactRefreshPlugin from '@rspack/plugin-react-refresh';

import { ASSET_RULE_TEST, HASHED_JS_FILENAME_PATTERN, TS_RULE_TEST } from '~/constants';
import { ReactContext } from '~/contexts';
import type { PresetFunc } from '~/types';

export const createReactPreset: PresetFunc = (context) => {
    if (!(context instanceof ReactContext)) throw new Error('Invalid context');

    return {
        name: 'react',

        target: 'browserslist:defaults',

        resolve: {
            extensions: ['...', '.jsx', '.ts', '.tsx'],
            extensionAlias: {
                '.js': ['.tsx', '.ts', '.jsx', '.js'],
                '.cjs': ['.ctsx', '.cts', '.cjsx', '.cjs'],
                '.mjs': ['.mtsx', '.mts', '.mjsx', '.mjs'],
            },
        },

        output: {
            filename: context.isProduction ? HASHED_JS_FILENAME_PATTERN : '[name].js',
            ...(context.publicUrl ? { publicPath: context.publicUrl.toString() } : {}),
        },

        node: {
            global: true,
            __dirname: true,
            __filename: true,
        },

        externalsPresets: { web: true },

        module: {
            rules: [
                {
                    test: TS_RULE_TEST,
                    loader: 'builtin:swc-loader',
                    options: {
                        env: { targets: 'defaults' },
                        jsc: {
                            parser: {
                                syntax: 'typescript',
                                tsx: true,
                            },
                            transform: {
                                react: {
                                    runtime: 'automatic',
                                    throwIfNamespace: true,
                                    useBuiltins: false,
                                    development: !context.isProduction,
                                    refresh: context.isDevServer,
                                },
                            },
                        },
                    } satisfies SwcLoaderOptions,
                },
                {
                    test: ASSET_RULE_TEST,
                    type: 'asset/resource',
                },
            ],
        },

        plugins: [
            context.htmlTemplateFile
                && new rspack.HtmlRspackPlugin({ template: context.htmlTemplateFile }),
            context.isDevServer && new ReactRefreshPlugin({ forceEnable: true }),
        ],

        experiments: { css: true },

        devServer: {
            historyApiFallback: true,
            host: context.publicUrl?.hostname,
            port: context.publicUrl?.port,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
            },
        },
    };
};
