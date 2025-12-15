import fs from 'node:fs';
import path from 'node:path';

export function findFilePath(currentDir: string, filePath: string): string | null {
    const resolvedPath = path.join(currentDir, filePath);
    return fs.existsSync(resolvedPath) ? resolvedPath : null;
}

export function findFilePathOrThrow(currentDir: string, filePath: string): string {
    const resolvedPath = path.join(currentDir, filePath);
    if (!fs.existsSync(resolvedPath)) throw new Error(`File not found: ${resolvedPath}`);
    return resolvedPath;
}
