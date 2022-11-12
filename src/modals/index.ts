import type { Env } from '../@types/Env';
import type { Modal } from '../structures/Modal';

export const modals = {
} as {
    [key: string]: (new (env: Env) => Modal) | undefined,
};
