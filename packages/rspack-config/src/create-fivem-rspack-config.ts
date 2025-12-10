import path from 'node:path';

import type { RspackOptions } from '@rspack/core';

import { mergeConfig } from './utils/merge-config';

export function createFivemRspackConfig(overrides: RspackOptions = {}): RspackOptions {
    const cwd = overrides.context ?? process.cwd();
    const isProduction = process.env.NODE_ENV === 'production';

    const config: RspackOptions = {
        name: 'fivem',

        context: cwd,

        target: 'node16',
        mode: isProduction ? 'production' : 'development',

        entry: path.resolve(cwd, 'src/index.ts'),

        output: {
            clean: true,
            path: path.resolve(cwd, 'dist'),
        },

        optimization: {
            minimize: false,
        },

        resolve: {
            extensions: ['.js', '.json', '.wasm', '.ts'],
            extensionAlias: {
                '.js': ['.ts', '.js'],
                '.cjs': ['.cts', '.cjs'],
                '.mjs': ['.mts', '.mjs'],
            },
            tsConfig: path.resolve(cwd, 'tsconfig.json'),
        },

        node: {
            global: false,
            __filename: false,
            __dirname: false,
        },

        externalsPresets: {
            node: true,
        },

        module: {
            rules: [
                {
                    test: /\.(?:ts|cts|mts)$/iu,
                    type: 'javascript/auto',
                    exclude: [/dist\//u, /node_modules\//u],
                    loader: 'builtin:swc-loader',
                    options: {
                        minify: false,
                        module: {
                            type: 'nodenext',
                        },
                        jsc: {
                            target: 'es2021',
                            parser: {
                                syntax: 'typescript',
                            },
                            transform: {
                                useDefineForClassFields: true,
                            },
                            keepClassNames: true,
                            externalHelpers: false,
                        },
                    },
                },
            ],
        },
    };

    return mergeConfig(config, overrides);
}
