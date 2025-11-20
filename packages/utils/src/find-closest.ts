import fs from 'node:fs';
import path from 'node:path';

import { memoizeOne } from './memoize-one';

function _findClosest(target: string, startDir: string, scopeProject: boolean): string | null {
    let curr = startDir;

    while (curr !== '/') {
        const potentialPath = path.join(curr, target);
        if (fs.existsSync(potentialPath)) return potentialPath;
        if (scopeProject && fs.existsSync(path.join(curr, '.git'))) break;
        curr = path.dirname(curr);
    }

    return null;
}

export const findClosest = memoizeOne(_findClosest);

export function findProjectRoot(startDir?: string): string {
    const gitFolder = findClosest('.git', startDir ?? process.cwd(), true);
    if (!gitFolder) throw new Error('Could not find project root (no .git directory found)');
    return path.dirname(gitFolder);
}

export function findPackageRoot(startDir?: string): string {
    const pkgJson = findClosest('package.json', startDir ?? process.cwd(), true);
    if (!pkgJson) throw new Error('Could not find package root (no package.json file found)');
    return path.dirname(pkgJson);
}

export function findGitIgnore(startDir?: string): string {
    const gitIgnore = findClosest('.gitignore', startDir ?? process.cwd(), true);
    if (!gitIgnore) throw new Error('Could not find .gitignore file');
    return gitIgnore;
}
