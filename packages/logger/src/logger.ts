import { findPackageRoot, findProjectRoot } from '@jpp/utils';
import { green, blue, yellow, red, gray } from 'colorette';

export type LogFunc = (message?: string, ...args: unknown[]) => void;

export type LoggerOptions = {
    readonly logStdout?: LogFunc | undefined;
    readonly logStderr?: LogFunc | undefined;
    readonly rootDir?: string | undefined;
    readonly rootIsProjectRoot?: boolean | undefined;
    readonly rootIsPackageRoot?: boolean | undefined;
};

export class Logger {
    private readonly _logStdout: LogFunc;
    private readonly _logStderr: LogFunc;
    private readonly _rootDir: string | undefined;

    constructor(options: LoggerOptions = {}) {
        this._logStdout = options.logStdout ?? console.log;
        this._logStderr = options.logStderr ?? console.error;
        this._rootDir =
            options.rootDir
            ?? (options.rootIsPackageRoot ? findPackageRoot()
            : options.rootIsProjectRoot ? findProjectRoot()
            : undefined);
    }

    public formatPath(path: string): string {
        const root = this._rootDir ?? process.cwd();
        const replaceWith = this._rootDir ? '<root>/' : '<cwd>/';
        return path.replace(new RegExp(`^${root}/`, 'u'), gray(replaceWith));
    }

    public log(message?: string, ...args: unknown[]): void {
        this._logStdout(message, ...args);
    }

    public success(message?: string, ...args: unknown[]): void {
        this._logStdout(`${green('✔︎')} ${message}`, ...args);
    }

    public info(message?: string, ...args: unknown[]): void {
        this._logStdout(`${blue('ℹ︎')} ${message}`, ...args);
    }

    public warning(message?: string, ...args: unknown[]): void {
        this._logStdout(`${yellow('⚠︎')} ${message}`, ...args);
    }

    public error(message?: string, ...args: unknown[]): void {
        this._logStderr(`${red('✘')} ${message}`, ...args);
    }

    public list(items: string[]): void {
        for (const item of items) this._logStdout(` - ${item}`);
    }

    public paths(paths: string[]): void {
        this.list(paths.map((p) => this.formatPath(p)));
    }
}
