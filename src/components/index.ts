import type { APIMessageComponentInteraction } from 'discord-api-types/v10';
import type { Env } from '../@types/temp';
import type { Component } from '../structures/Component';

export const components = {
} as {
    [key: string]: (new (env: Env) => Component<APIMessageComponentInteraction>) | undefined,
};
