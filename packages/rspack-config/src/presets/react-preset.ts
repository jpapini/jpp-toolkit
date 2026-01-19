import { createRequire } from 'node:module';
import path from 'node:path';

import type { SwcLoaderOptions } from '@rspack/core';
import { rspack } from '@rspack/core';
import ReactRefreshPlugin from '@rspack/plugin-react-refresh';

import {
    ASSET_RULE_TEST,
    CSS_RULE_TEST,
    HASHED_JS_FILENAME_PATTERN,
    TS_RULE_TEST,
} from '~/constants';
import type { GetPresetDefaultOptions, Preset } from '~/types';

import type { BasePresetOptions } from './base-preset';
import { getBasePresetDefaultOptions } from './base-preset';

const require = createRequire(import.meta.url);

export type ReactPresetOptions = BasePresetOptions & {
    readonly htmlTemplateFile: string;
    readonly browserlist: string;
    readonly publicUrl: string;
};

export const getReactPresetDefaultOptions: GetPresetDefaultOptions<ReactPresetOptions> = (
    options,
    context,
) => ({
    ...getBasePresetDefaultOptions(options, context),
    htmlTemplateFile: options.htmlTemplateFile ?? 'src/index.html',
    browserlist: options.browserlist ?? 'defaults',
    publicUrl: options.publicUrl ?? 'http://localhost:8080/',
});

export const reactPreset: Preset<ReactPresetOptions> = (options, context) => {
    const publicUrl = new URL(options.publicUrl);
    if (!publicUrl.pathname.endsWith('/')) publicUrl.pathname += '/';

    return {
        name: 'react-preset',

        target: `browserslist:${options.browserlist}`,

        output: {
            filename: context.isProduction ? HASHED_JS_FILENAME_PATTERN : '[name].js',
            publicPath: publicUrl.toString(),
        },

        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '...'],
            extensionAlias: {
                '.js': ['.tsx', '.ts', '.jsx', '.js'],
                '.cts': ['.ctsx', '.cts', '.cjsx', '.js'],
                '.mjs': ['.mtsx', '.mts', '.mjsx', '.mjs'],
            },
        },

        externalsPresets: { web: true },

        module: {
            rules: [
                {
                    test: TS_RULE_TEST,
                    loader: 'builtin:swc-loader',
                    options: {
                        env: { targets: options.browserlist },
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
                                    refresh: context.isServeMode,
                                },
                            },
                        },
                    } satisfies SwcLoaderOptions,
                },
                {
                    test: ASSET_RULE_TEST,
                    type: 'asset/resource',
                },
                {
                    test: CSS_RULE_TEST,
                    type: 'css',
                    use: [
                        {
                            loader: require.resolve('postcss-loader'),
                            options: {
                                implementation: require.resolve('postcss'),
                                postcssOptions: {
                                    plugins: [
                                        [
                                            require.resolve('@tailwindcss/postcss'),
                                            { optimize: context.isProduction },
                                        ],
                                    ],
                                },
                            },
                        },
                    ],
                },
            ],
        },

        devServer: {
            host: publicUrl.hostname || undefined,
            port: publicUrl.port || undefined,
            historyApiFallback: true,
            hot: 'only',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
            },
        },

        experiments: { css: true },

        plugins: [
            new rspack.EnvironmentPlugin({
                ...options.envVariables,
                PUBLIC_URL: publicUrl.toString(),
            }),
            new rspack.HtmlRspackPlugin({
                template: path.resolve(context.cwd, options.htmlTemplateFile),
                minify: context.isProduction,
            }),
            context.isServeMode && new ReactRefreshPlugin({ forceEnable: true }),
        ],
    };
};
