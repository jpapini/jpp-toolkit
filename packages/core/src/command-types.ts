import type { Input, Output, OutputArgs } from '@oclif/parser';

export type CommandOptions<T> = T extends Input<infer R> ? Output<R, OutputArgs> : never;
export type CommandFlags<T> = CommandOptions<T>['flags'];
export type CommandArgs<T> = CommandOptions<T>['args'];
