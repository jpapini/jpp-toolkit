import type { RspackOptions } from '@rspack/core';

import type { BaseContext } from '~/contexts';

export type Preset = Partial<Omit<RspackOptions, 'name'>> & Required<Pick<RspackOptions, 'name'>>;
export type PresetFunc = (context: BaseContext) => Preset | Promise<Preset>;
