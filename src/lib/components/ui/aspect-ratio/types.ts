import type { WithElementRef } from '$types';
import type { HTMLAttributes } from 'svelte/elements';

export type AspectRatioProps = WithElementRef<
	HTMLAttributes<HTMLDivElement>
> & {
	ratio?: number;
};
