declare module 'rcon' {
    import { EventEmitter } from 'node:events';

    interface RconOptions {
        /**
         * true for TCP, false for UDP
         * @default true
         */
        tcp?: boolean | undefined;

        /**
         * if using UDP, whether to use the challenge protocol
         * @default true
         */
        challenge?: boolean | undefined;

        /**
         * RCON id to use
         */
        id?: number | undefined;
    }

    class Rcon extends EventEmitter {
        host: string;
        port: number;
        password: string;
        rconId: number;
        hasAuthed: boolean;
        tcp: boolean;
        challenge: boolean;

        constructor(host: string, port: number, password: string, options?: RconOptions);

        /**
         * Send data to the RCON server
         * @param data - The command or data to send
         * @param cmd - The packet type (optional)
         * @param id - The RCON id (optional)
         */
        public send(data: string, cmd?: number, id?: number): void;

        /**
         * Connect to the RCON server
         */
        public connect(): void;

        /**
         * Disconnect from the RCON server
         */
        public disconnect(): void;

        /**
         * Set a timeout for the connection (TCP only)
         * @param timeout - Timeout in milliseconds
         * @param callback - Optional callback function
         */
        public setTimeout(timeout: number, callback?: () => void): void;

        public on(event: 'connect' | 'auth' | 'end', listener: () => void): this;
        public on(event: 'response', listener: (response: string) => void): this;
        public on(event: 'server', listener: (message: string) => void): this;
        public on(event: 'error', listener: (error: Error) => void): this;
        public on(event: string | symbol, listener: (...args: any[]) => void): this;

        public once(event: 'connect' | 'auth' | 'end', listener: () => void): this;
        public once(event: 'response', listener: (response: string) => void): this;
        public once(event: 'server', listener: (message: string) => void): this;
        public once(event: 'error', listener: (error: Error) => void): this;
        public once(event: string | symbol, listener: (...args: any[]) => void): this;

        public emit(event: 'connect' | 'auth' | 'end'): boolean;
        public emit(event: 'response' | 'server', response: string): boolean;
        public emit(event: 'error', error: Error): boolean;
        public emit(event: string | symbol, ...args: any[]): boolean;
    }

    export = Rcon;
}
