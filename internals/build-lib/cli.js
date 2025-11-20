#!/usr/bin/env node
import path from 'node:path';

import { build } from 'tsdown';

const cwd = process.cwd();

await build({
    cwd,

    target: 'node24',
    platform: 'node',

    entry: path.resolve(cwd, 'src/index.ts'),
    outDir: path.resolve(cwd, 'dist'),
    tsconfig: path.resolve(cwd, 'tsconfig.json'),

    format: ['esm'],

    dts: true,
    sourcemap: true,
    nodeProtocol: true,
    shims: true,

    watch: process.argv.includes('--watch'),
    ignoreWatch: [/\/\.turbo\//u, /\/coverage\//u, /\/old\//u, /\/tmp\//u],
});
