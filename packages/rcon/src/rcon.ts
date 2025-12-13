import dgram from 'node:dgram';
import type { Socket } from 'node:dgram';

export type RconOptions = {
    host: string;
    port: number;
    password: string;
    timeout?: number;
};

export class Rcon {
    private readonly _host: string;
    private readonly _port: number;
    private readonly _password: string;
    private readonly _timeout: number;

    private _socket: Socket | null;
    private _connected: boolean;

    constructor(options: RconOptions) {
        this._host = options.host;
        this._port = options.port;
        this._password = options.password;
        this._timeout = options.timeout ?? 5000;
        this._socket = null;
        this._connected = false;
    }

    public async connect(): Promise<void> {
        if (this._connected) return;

        this._socket = dgram.createSocket('udp4');
        await this._sendCommand('status');
        this._connected = true;
    }

    public disconnect(): void {
        this._closeSocket();
        this._connected = false;
    }

    public async send(command: string): Promise<string> {
        if (!this._connected) throw new Error('Not connected');
        return this._sendCommand(command);
    }

    private async _sendCommand(command: string): Promise<string> {
        return new Promise((resolve, reject) => {
            if (!this._socket) return void reject(new Error('Socket is not initialized'));

            let timeoutId: NodeJS.Timeout;

            const handleError = (msg: string) => {
                clearTimeout(timeoutId);
                this._closeSocket();
                reject(new Error(msg));
            };

            const handleMessage = (message: Buffer) => {
                clearTimeout(timeoutId);
                const res = message.toString('ascii').slice(4).trim();
                if (res.includes('Invalid password'))
                    return void handleError('Authentication failed: Invalid password');
                resolve(res);
            };

            timeoutId = setTimeout(
                () => handleError(`Failed to send command to ${this._host}:${this._port}: timeout`),
                this._timeout,
            );

            this._socket.once('error', (error) => {
                handleError(
                    `Failed to send command to ${this._host}:${this._port}: ${error.message}`,
                );
            });

            this._socket.once('message', handleMessage);

            const cmd = this._buildCommand(command);
            this._socket.send(cmd, 0, cmd.length, this._port, this._host, (error) => {
                if (!error) return;
                handleError(
                    `Failed to send command to ${this._host}:${this._port}: ${error.message}`,
                );
            });
        });
    }

    private _closeSocket() {
        this._socket?.close();
        this._socket = null;
    }

    private _buildCommand(command: string): Buffer {
        const buffer = Buffer.alloc(11 + this._password.length + command.length);
        buffer.writeUInt32LE(0xffffffff, 0);
        buffer.write('rcon ', 4);
        buffer.write(this._password, 9, this._password.length);
        buffer.write(' ', 9 + this._password.length, 1);
        buffer.write(command, 10 + this._password.length, command.length);
        buffer.write('\n', 10 + this._password.length + command.length, 1);
        return buffer;
    }
}
