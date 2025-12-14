import { existsSync } from 'node:fs';

export function findFirstExistingPath(possiblePaths: string[]): string | undefined {
    for (const p of possiblePaths) if (existsSync(p)) return p;
    return undefined;
}
