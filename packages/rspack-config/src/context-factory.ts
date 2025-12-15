import { NodeContext, ReactContext } from './contexts';
import type { BaseContext, NodeContextOptions, ReactContextOptions } from './contexts';
import { BuildType } from './enums';
import type { RspackEnv } from './types';

export type ContextOptions = NodeContextOptions | ReactContextOptions;

export function contextFactory(options: ContextOptions, rspackEnv: RspackEnv): BaseContext {
    switch (true) {
        case options.buildType === BuildType.NODE:
            return new NodeContext(options, rspackEnv);
        case options.buildType === BuildType.REACT:
            return new ReactContext(options, rspackEnv);
        default:
            throw new Error('Invalid context options');
    }
}
