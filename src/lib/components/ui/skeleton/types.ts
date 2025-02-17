import type { HTMLAttributes } from 'svelte/elements';

export type SkeletonProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & {
	ref?: HTMLDivElement | null;
	class?: string;
};
