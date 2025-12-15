import type { BuildType } from '~/enums';
import type { RspackEnv } from '~/types';

import { BaseContext } from './base-context';
import type { BaseContextOptions } from './base-context';

export type NodeContextOptions = BaseContextOptions<typeof BuildType.NODE>;

export class NodeContext extends BaseContext<typeof BuildType.NODE> {
    constructor({ ...baseOptions }: NodeContextOptions, rspackEnv: RspackEnv) {
        super(baseOptions, rspackEnv);
    }
}
