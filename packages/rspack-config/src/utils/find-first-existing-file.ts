import fs from 'node:fs';
import path from 'node:path';

export function findFirstExistingFile(files: string[], cwd: string): string | null {
    for (const file of files) if (fs.existsSync(path.resolve(cwd, file))) return file;
    return null;
}
