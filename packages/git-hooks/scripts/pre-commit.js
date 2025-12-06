#!/usr/bin/env node
import { createRequire } from 'node:module';
import path from 'node:path';

import { execa } from 'execa';

const require = createRequire(import.meta.url);
const bin = path.resolve(require.resolve('lint-staged/package.json'), '../bin/lint-staged.js');
const configPath = require.resolve('@jpp-toolkit/lint-staged-config');

const result = await execa(bin, ['--config', configPath], {
    stdio: 'inherit',
    reject: false,
});

process.exit(result.exitCode);
