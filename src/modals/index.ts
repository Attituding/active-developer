import type { Env } from '../@types/temp';
import type { Modal } from '../structures/Modal';

export const modals = {
} as {
    [key: string]: (new (env: Env) => Modal) | undefined,
};
