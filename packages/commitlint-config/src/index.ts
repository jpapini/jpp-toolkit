import { createRequire } from 'node:module';

import type { UserConfig } from '@commitlint/types';

const require = createRequire(import.meta.url);

const config: UserConfig = {
    extends: [require.resolve('@commitlint/config-conventional')],
};

export default config;
