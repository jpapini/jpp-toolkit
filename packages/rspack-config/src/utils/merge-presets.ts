import type { RspackOptions } from '@rspack/core';

import type { BaseContext } from '~/contexts';
import type { PresetFunc } from '~/types';

import { mergeConfig } from './merge-config';

export async function mergePresets(
    context: BaseContext,
    presets: (PresetFunc | false | undefined | null)[],
) {
    let config: RspackOptions = {};

    for (const presetFunc of presets) {
        if (!presetFunc) continue;
        const preset = await presetFunc(context);
        config = mergeConfig(config, preset);
    }

    return config;
}
