#!/usr/bin/env node
import { createRequire } from 'node:module';

import { execa } from 'execa';

const require = createRequire(import.meta.url);
const configPath = require.resolve('@jpp/commitlint-config');

const result = await execa('commitlint', ['--edit', process.argv[2], '--config', configPath], {
    stdio: 'inherit',
    preferLocal: true,
    reject: false,
});

process.exit(result.exitCode);
