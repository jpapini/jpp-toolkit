import type { RspackOptions } from '@rspack/core';

import { contextFactory } from './context-factory';
import type { ContextOptions } from './context-factory';
import { NodeContext, ReactContext } from './contexts';
import { createBasePreset, createNodePreset, createReactPreset } from './presets';
import type { RspackEnv } from './types';
import { mergePresets } from './utils/merge-presets';

export function createBuildConfiguration(options: ContextOptions) {
    return async function (rspackEnv: RspackEnv = {}): Promise<RspackOptions> {
        const context = contextFactory(options, rspackEnv);
        context.print();

        const config = await mergePresets(context, [
            createBasePreset,
            context instanceof NodeContext && createNodePreset,
            context instanceof ReactContext && createReactPreset,
        ]);

        return config;
    };
}
