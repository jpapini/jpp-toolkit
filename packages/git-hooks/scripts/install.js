#!/usr/bin/env node
import path from 'node:path';
import url from 'node:url';

import { findProjectRoot } from '@jpp-toolkit/utils';
import husky from 'husky';

if (process.env.CI !== undefined || process.env.NODE_ENV === 'production') {
    console.log('CI or production environment, skipping Husky installation.');
    process.exit(0);
}

const currentDir = url.fileURLToPath(new URL('.', import.meta.url));
const hooksDir = path.resolve(currentDir, '../hooks');
const projectRoot = findProjectRoot(currentDir);

process.chdir(projectRoot);
husky(hooksDir);
