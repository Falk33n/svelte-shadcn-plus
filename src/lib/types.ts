import type { Snippet } from 'svelte';

export type WithClassAsString<T> = Omit<T, 'class'> & { class?: string };

export type WithoutElementRef<T> = Omit<T, 'ref'>;
export type WithElementRef<T, K = undefined> = T & {
	ref?: K extends undefined ? HTMLElement | null : K | null;
};

export type WithoutChildren<T> = Omit<T, 'children'>;
export type WithChildren<T> = T & { children?: Snippet };

export type WithoutChild<T> = Omit<T, 'child'>;
export type WithChild<T, K = undefined> = T & {
	child?: K extends undefined ? Snippet : Snippet<[{ props: K }]>;
};

export type WithoutChildrenAndChild<T> = Omit<T, 'children' | 'child'>;
export type WithChildrenAndChild<T, K = undefined> = T & {
	children?: Snippet;
	child?: K extends undefined ? Snippet : Snippet<[{ props: K }]>;
};

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
