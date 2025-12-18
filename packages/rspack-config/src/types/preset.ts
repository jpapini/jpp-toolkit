import type { RspackOptions } from '@rspack/core';

import type { RunContext } from './run-context';

export type GetPresetDefaultOptions<TPresetOptions> = (
    options: Partial<TPresetOptions>,
    context: RunContext,
) => TPresetOptions;

export type Preset<TPresetOptions> = (
    presetOptions: TPresetOptions,
    runContext: RunContext,
) => RspackOptions;
