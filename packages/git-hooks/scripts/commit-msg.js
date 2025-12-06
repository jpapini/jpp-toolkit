#!/usr/bin/env node
import { createRequire } from 'node:module';
import path from 'node:path';

import { execa } from 'execa';

const require = createRequire(import.meta.url);
const bin = path.resolve(require.resolve('@commitlint/cli/package.json'), '../cli.js');
const configPath = require.resolve('@jpp-toolkit/commitlint-config');

const result = await execa(bin, ['--edit', process.argv[2], '--config', configPath], {
    stdio: 'inherit',
    reject: false,
});

process.exit(result.exitCode);
