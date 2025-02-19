import type { WithElementRef, WithoutChildren } from '$types';
import type { HTMLImgAttributes } from 'svelte/elements';

export type ImageProps = WithElementRef<
	WithoutChildren<Omit<HTMLImgAttributes, 'src' | 'alt'>>
> & {
	src: string;
	alt: string;
	disableLoader?: boolean;
};

export type ImageStatus = 'loading' | 'loaded' | 'error';
