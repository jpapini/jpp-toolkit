#!/usr/bin/env node
import fs from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import url from 'node:url';

const require = createRequire(import.meta.url);

async function generateTsConfig() {
    const outDir = url.fileURLToPath(new URL('../ts-config', import.meta.url));
    await fs.rm(outDir, { recursive: true, force: true });
    await fs.mkdir(outDir, { recursive: true });

    const tsconfigDir = path.dirname(require.resolve('@jpp/ts-config/package.json'));
    const files = await fs.readdir(tsconfigDir);
    const tsconfigFiles = files.filter((f) => f.startsWith('tsconfig.') && f.endsWith('.json'));

    for (const file of tsconfigFiles) {
        const srcPath = path.join(tsconfigDir, file);
        const destPath = path.join(outDir, file);
        await fs.copyFile(srcPath, destPath);
    }
}

await generateTsConfig();
