import { Rcon } from './rcon';

const REFRESH_RESOURCES_RESPONSE_REGEX =
    /Found (?<new>\d+) new resources, and refreshed (?<refreshed>\d+)\/(?<total>\d+) resources\./iu;

export class FivemRcon extends Rcon {
    public async startResource(resourceName: string): Promise<void> {
        const res = await this.send(`start ${resourceName}`);
        if (res.includes("Couldn't find resource"))
            throw new Error(`Resource "${resourceName}" not found`);
    }

    public async stopResource(resourceName: string): Promise<void> {
        const res = await this.send(`stop ${resourceName}`);
        if (res.includes("Couldn't find resource"))
            throw new Error(`Resource "${resourceName}" not found`);
    }

    public async ensureResource(resourceName: string): Promise<void> {
        const res = await this.send(`ensure ${resourceName}`);
        if (res.includes("Couldn't find resource"))
            throw new Error(`Resource "${resourceName}" not found`);
    }

    public async restartResource(resourceName: string): Promise<void> {
        const res = await this.send(`restart ${resourceName}`);
        if (res.includes("Couldn't find resource"))
            throw new Error(`Resource "${resourceName}" not found`);
    }

    public async refreshResources(): Promise<{ new: number; refreshed: number; total: number }> {
        const res = await this.send('refresh');
        const match = REFRESH_RESOURCES_RESPONSE_REGEX.exec(res);
        if (!match?.groups) throw new Error('Unexpected response when refreshing resources');
        return {
            new: parseInt(match.groups['new']!),
            refreshed: parseInt(match.groups['refreshed']!),
            total: parseInt(match.groups['total']!),
        };
    }

    public async refreshAndEnsureResource(resourceName: string): Promise<void> {
        const res = await this.send(`refresh; ensure ${resourceName}`);
        if (res.includes("Couldn't find resource"))
            throw new Error(`Resource "${resourceName}" not found`);
        if (!res.includes('Started resource'))
            throw new Error(`Failed to start resource "${resourceName}"`);
    }

    public async exec(filename: string): Promise<void> {
        const res = await this.send(`exec ${filename}`);
        if (res.includes('No such config file')) throw new Error(`File "${filename}" not found`);
    }

    public async quitServer(reason?: string): Promise<void> {
        const command = reason ? `quit ${reason}` : 'quit';
        await this.send(command);
    }

    public async status(): Promise<string> {
        return this.send('status');
    }

    public async clientKick(playerId: number, reason?: string): Promise<void> {
        const command = reason ? `clientkick ${playerId} ${reason}` : `clientkick ${playerId}`;
        await this.send(command);
    }

    public async say(message: string): Promise<void> {
        await this.send(`say ${message}`);
    }

    public override async send(command: string): Promise<string> {
        const res = await super.send(command);
        if (res.includes('No such command')) throw new Error(`Command "${command}" not found`);
        return res.replace(/^print\s+/iu, '');
    }
}
