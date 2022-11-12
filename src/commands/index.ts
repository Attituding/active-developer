import type { Env } from '../@types/temp';
import { PingCommand } from './ping';
import type { Command } from '../structures/Command';

export const commands = {
    ping: PingCommand,
} as {
    ping: new (env: Env) => PingCommand,
    [key: string]: (new (env: Env) => Command) | undefined,
};
