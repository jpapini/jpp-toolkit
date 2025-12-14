import path from 'node:path';

import { rspack } from '@rspack/core';
import type { RspackOptions } from '@rspack/core';

import { Environment, FivemEntryType } from './enums';
import { findFirstExistingPath } from './utils/find-first-existing-path';

type BuildConfigOptions = {
    readonly cwd: string;
    readonly entry: string;
    readonly entryType: FivemEntryType;
    readonly resourceName: string;
    readonly environment: Environment;
};

function buildConfig(options: BuildConfigOptions): RspackOptions {
    const { cwd, entry, entryType, resourceName, environment } = options;

    const htmlTemplateFile = findFirstExistingPath([
        path.resolve(cwd, `src/${entryType}/index.html`),
        path.resolve(cwd, `src/${entryType}.html`),
    ]);
    const publicPath = `https://cfx-nui-${resourceName}/dist/${entryType}/`;

    const isProduction = environment === 'production';
    const isUi = entryType === FivemEntryType.UI;

    const config: RspackOptions = {
        name: `fivem-${entryType}`,

        context: cwd,

        target: isUi ? 'web' : 'node16',
        devtool: false,
        mode: environment,

        entry,

        output: {
            clean: true,
            path: path.resolve(cwd, 'dist', entryType),
            ...(isUi ? { publicPath } : {}),
        },

        optimization: {
            minimize: isProduction,
        },

        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.wasm'],
            extensionAlias: {
                '.js': ['.ts', '.js'],
                '.cjs': ['.cts', '.cjs'],
                '.mjs': ['.mts', '.mjs'],
            },
            tsConfig: path.resolve(cwd, 'tsconfig.json'),
        },

        node: {
            global: isUi,
            __filename: isUi,
            __dirname: isUi,
        },

        externalsPresets: {
            node: !isUi,
            web: isUi,
        },

        module: {
            rules: [
                {
                    test: /\.(?:ts|tsx|cts|mts)$/iu,
                    type: 'javascript/auto',
                    exclude: [/dist\//u, /node_modules\//u],
                    loader: 'builtin:swc-loader',
                    options: {
                        minify: isProduction,
                        module: { type: 'nodenext' },
                        jsc: {
                            target: isUi ? 'es5' : 'es2021',
                            parser: {
                                syntax: 'typescript',
                                tsx: true,
                            },
                            transform: {
                                react: { runtime: 'automatic' },
                                useDefineForClassFields: true,
                            },
                            keepClassNames: true,
                            externalHelpers: false,
                        },
                    },
                },
                ...(isUi ?
                    [
                        {
                            test: /\.(?:jpe?g|png|gif|svg)$/iu,
                            type: 'asset/resource',
                        },
                    ]
                :   []),
            ],
        },

        ...(isUi ? { experiments: { css: true } } : {}),

        ...(isUi && htmlTemplateFile ?
            { plugins: [new rspack.HtmlRspackPlugin({ template: htmlTemplateFile, publicPath })] }
        :   {}),

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

    return config;
}

export type CreateFivemRspackConfigOptions = {
    readonly resourceName?: string | undefined;
    readonly environment?: Environment | undefined;
    readonly cwd?: string | undefined;
};

export function createFivemRspackConfig(
    options: CreateFivemRspackConfigOptions = {},
): RspackOptions[] {
    const environment =
        options.environment
        ?? (process.env.NODE_ENV === Environment.PRODUCTION ?
            Environment.PRODUCTION
        :   Environment.DEVELOPMENT);
    const cwd = options.cwd ?? process.cwd();
    const resourceName = options.resourceName ?? path.basename(cwd);

    const configs: RspackOptions[] = [];

    for (const entryType of Object.values(FivemEntryType)) {
        const entry = findFirstExistingPath([
            path.resolve(cwd, `src/${entryType}/index.tsx`),
            path.resolve(cwd, `src/${entryType}/index.ts`),
            path.resolve(cwd, `src/${entryType}.tsx`),
            path.resolve(cwd, `src/${entryType}.ts`),
        ]);

        if (!entry) continue;

        const config = buildConfig({ cwd, entry, entryType, environment, resourceName });
        configs.push(config);
    }

    if (configs.length === 0) throw new Error('No valid FiveM resource entries found.');

    return configs;
}
