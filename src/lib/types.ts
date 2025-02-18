import type { Snippet } from 'svelte';

export type WithoutElementRef<T> = Omit<T, 'ref'>;
export type WithElementRef<T> = T & { ref?: HTMLElement | null };

export type WithoutChildren<T> = Omit<T, 'children'>;
export type WithChildren<T> = T & { children?: Snippet };

export type WithoutChild<T> = Omit<T, 'child'>;
export type WithChild<T, K = undefined> = T & {
	child?: K extends undefined ? Snippet : Snippet<[{ props: K }]>;
};

export type WithoutChildrenOrChild<T> = Omit<T, 'children' | 'child'>;
export type WithChildrenOrChild<T, K = undefined> = T & {
	children?: Snippet;
	child?: K extends undefined ? Snippet : Snippet<[{ props: K }]>;
};
