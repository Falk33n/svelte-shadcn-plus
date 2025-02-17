import type { HTMLAttributes } from 'svelte/elements';

export type AspectRatioProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & {
	ref?: HTMLDivElement | null;
	class?: string;
	ratio?: number;
};
