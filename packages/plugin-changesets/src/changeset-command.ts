import { createRequire } from 'node:module';
import path from 'node:path';

import { Command } from '@jpp-toolkit/core';
import { findProjectRoot } from '@jpp-toolkit/utils';
import { execa } from 'execa';

const require = createRequire(import.meta.url);

const CHANGESET_BIN = path.resolve(require.resolve('@changesets/cli/package.json'), '../bin.js');

export abstract class ChangesetCommand extends Command {
    protected async _execChangeset(args: string[] = []): Promise<void> {
        const cwd = findProjectRoot();
        const result = await execa(CHANGESET_BIN, args, { cwd, stdio: 'inherit', reject: false });

        if (result.failed) this.exit(1);
    }
}
