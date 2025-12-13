import { existsSync } from 'node:fs';
import path from 'node:path';

import type { RspackOptions } from '@rspack/core';

import { mergeConfig } from './utils/merge-config';

export function createFivemRspackConfig(overrides: RspackOptions = {}): RspackOptions {
    const cwd = overrides.context ?? process.cwd();
    const mode =
        overrides.mode ?? (process.env.NODE_ENV === 'production' ? 'production' : 'development');
    const isProduction = mode === 'production';

    const entries: Record<string, string> = {};

    for (const name of ['client', 'server', 'shared']) {
        for (const file of [`src/${name}/index.ts`, `src/${name}.ts`]) {
            const entryPath = path.resolve(cwd, file);
            if (existsSync(entryPath)) {
                entries[name] = entryPath;
                break;
            }
        }
    }

    const config: RspackOptions = {
        name: 'fivem',

        context: cwd,

        target: 'node16',
        devtool: false,
        mode,

        entry: entries,

        output: {
            clean: true,
            path: path.resolve(cwd, 'dist'),
        },

        optimization: {
            minimize: isProduction,
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
                        minify: isProduction,
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
    };

    return mergeConfig(config, overrides);
}
