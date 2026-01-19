import type { RspackOptions } from '@rspack/core';

import type {
    FivemScriptPresetOptions,
    FivemUiPresetOptions,
    NodePresetOptions,
    ReactPresetOptions,
} from './presets';
import {
    basePreset,
    fivemScriptPreset,
    fivemUiPreset,
    getFivemScriptPresetDefaultOptions,
    getFivemUiPresetDefaultOptions,
    getNodePresetDefaultOptions,
    getReactPresetDefaultOptions,
    nodePreset,
    reactPreset,
} from './presets';
import type { RspackEnv, RunContext } from './types';
import { findFirstExistingFile } from './utils/find-first-existing-file';
import { mergeConfig } from './utils/merge-config';

function createConfigBuilder<TOptions, TReturn extends RspackOptions | RspackOptions[]>(
    func: (options: Partial<TOptions>, context: RunContext) => TReturn,
) {
    return function (options: Partial<TOptions> = {}, context: Partial<RunContext> = {}) {
        return function (env: RspackEnv): TReturn {
            return func(options, {
                cwd: process.cwd(),
                isProduction: process.env.NODE_ENV === 'production',
                isBuildMode: Boolean(env.RSPACK_BUILD),
                isBundleMode: Boolean(env.RSPACK_BUNDLE),
                isWatchMode: Boolean(env.RSPACK_WATCH),
                isServeMode: Boolean(env.RSPACK_SERVE),
                ...context,
            });
        };
    };
}

export const createNodeRspackConfig = createConfigBuilder<NodePresetOptions, RspackOptions>(
    (options, context) => {
        const presetOptions = getNodePresetDefaultOptions(options, context);

        return mergeConfig(basePreset(presetOptions, context), nodePreset(presetOptions, context), {
            name: 'node',
        });
    },
);

export const createReactRspackConfig = createConfigBuilder<ReactPresetOptions, RspackOptions>(
    (options, context) => {
        const presetOptions = getReactPresetDefaultOptions(options, context);

        return mergeConfig(
            basePreset(presetOptions, context),
            reactPreset(presetOptions, context),
            {
                name: 'react',
            },
        );
    },
);

export const createFivemScriptRspackConfig = createConfigBuilder<
    Omit<FivemScriptPresetOptions, 'entryFile' | 'outDir'>,
    RspackOptions[]
>((options, context) => {
    const createBuildPreset = (type: 'client' | 'server' | 'shared') => {
        const entryFile = findFirstExistingFile(
            [`src/${type}/index.ts`, `src/${type}.ts`, `src/${type}/index.js`, `src/${type}.js`],
            context.cwd,
        );
        if (!entryFile) return null;

        const presetOptions = getFivemScriptPresetDefaultOptions(
            {
                ...options,
                entryFile,
                outDir: `dist/${type}`,
            },
            context,
        );

        return mergeConfig(
            basePreset(presetOptions, context),
            nodePreset(presetOptions, context),
            fivemScriptPreset(presetOptions, context),
            { name: `fivem-${type}` },
        );
    };

    const configs: (RspackOptions | null)[] = [];

    configs.push(createBuildPreset('client'));
    configs.push(createBuildPreset('server'));
    configs.push(createBuildPreset('shared'));

    return configs.filter(Boolean) as RspackOptions[];
});

export const createFivemUiRspackConfig = createConfigBuilder<
    Omit<FivemUiPresetOptions, 'entryFile' | 'outDir' | 'htmlTemplateFile'>,
    RspackOptions
>((options, context) => {
    const entryFile = findFirstExistingFile(
        [
            'src/ui/index.tsx',
            'src/ui.tsx',
            'src/ui/index.ts',
            'src/ui.ts',
            'src/ui/index.jsx',
            'src/ui.jsx',
            'src/ui/index.js',
            'src/ui.js',
        ],
        context.cwd,
    );

    const htmlTemplateFile = findFirstExistingFile(
        ['src/ui/index.html', 'src/ui.html', 'src/index.html'],
        context.cwd,
    );

    if (!entryFile || !htmlTemplateFile) return {};

    const presetOptions = getFivemUiPresetDefaultOptions(
        {
            ...options,
            entryFile,
            htmlTemplateFile,
            outDir: 'dist/ui',
        },
        context,
    );

    return mergeConfig(
        basePreset(presetOptions, context),
        reactPreset(presetOptions, context),
        fivemUiPreset(presetOptions, context),
        { name: 'fivem-ui' },
    );
});
