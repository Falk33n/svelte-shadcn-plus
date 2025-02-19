import type { WithElementRef, WithoutChildren } from '$types';
import type { HTMLInputAttributes } from 'svelte/elements';

export type InputProps = WithoutChildren<WithElementRef<HTMLInputAttributes>>;
