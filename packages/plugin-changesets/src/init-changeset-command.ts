import { ChangesetCommand } from './changeset-command';

export class InitChangesetCommand extends ChangesetCommand {
    static override summary = 'Sets up the .changeset folder.';

    static override description = `
This command sets up the .changeset folder. It generates a readme and a config file.
The config file includes the default options and comments on what these options represent.
You should run this command once when you are setting up changesets.
`;

    static override examples = [
        {
            description: 'Initialize changesets in your repository.',
            command: '<%= config.bin %> <%= command.id %>',
        },
    ];

    public async run(): Promise<void> {
        await this._execChangeset(['init']);
    }
}
