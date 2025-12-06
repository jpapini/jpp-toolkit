import { AddChangesetCommand } from './add-changeset-command';
import { InitChangesetCommand } from './init-changeset-command';
import { PreChangesetCommand } from './pre-changeset-command';
import { PublishChangesetCommand } from './publish-changeset-command';
import { StatusChangesetCommand } from './status-changeset-command';
import { TagChangesetCommand } from './tag-changeset-command';
import { VersionChangesetCommand } from './version-changeset-command';

export const commands = {
    'changeset:init': InitChangesetCommand,
    'changeset:add': AddChangesetCommand,
    'changeset:version': VersionChangesetCommand,
    'changeset:publish': PublishChangesetCommand,
    'changeset:status': StatusChangesetCommand,
    'changeset:pre': PreChangesetCommand,
    'changeset:tag': TagChangesetCommand,
};
