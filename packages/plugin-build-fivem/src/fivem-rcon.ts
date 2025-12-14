import dgram from 'node:dgram';

import { getErrMsg } from '@jpp-toolkit/utils';

export type RconOptions = {
    readonly host: string;
    readonly port: number;
    readonly password: string;
    readonly timeout?: number | undefined;
};

function buildCommand(command: string, password: string): Buffer {
    const buffer = Buffer.alloc(11 + password.length + command.length);
    buffer.writeUInt32LE(0xffffffff, 0);
    buffer.write('rcon ', 4);
    buffer.write(password, 9, password.length);
    buffer.write(' ', 9 + password.length, 1);
    buffer.write(command, 10 + password.length, command.length);
    buffer.write('\n', 10 + password.length + command.length, 1);
    return buffer;
}

export async function sendFivemRcon(command: string, options: RconOptions): Promise<string> {
    const socket = dgram.createSocket('udp4');

    return new Promise<string>((resolve, reject) => {
        let timeoutId: NodeJS.Timeout;

        const handleError = (err?: Error | string | null) => {
            if (!err) return;
            clearTimeout(timeoutId);
            const msg = getErrMsg(err);
            reject(new Error(`Failed to send command to ${options.host}:${options.port}: ${msg}`));
        };

        const handleMessage = (msg: Buffer) => {
            clearTimeout(timeoutId);
            const res = msg.toString('ascii').slice(4).trim();
            if (res.includes('Invalid password')) return void handleError('Invalid password');
            resolve(res);
        };

        timeoutId = setTimeout(
            () => handleError(`Timeout after ${options.timeout}ms`),
            options.timeout ?? 5000,
        );

        socket.once('error', handleError);
        socket.once('message', handleMessage);

        const cmd = buildCommand(command, options.password);
        socket.send(cmd, 0, cmd.length, options.port, options.host, handleError);
    }).finally(() => {
        socket.close();
    });
}

export async function refreshAndEnsureFivemResource(
    resourceName: string,
    options: RconOptions,
): Promise<void> {
    const res = await sendFivemRcon(`refresh; ensure ${resourceName}`, options);
    if (res.includes("Couldn't find resource"))
        throw new Error(`Resource "${resourceName}" not found`);
    if (!res.includes('Started resource'))
        throw new Error(`Failed to start resource "${resourceName}"`);
}
