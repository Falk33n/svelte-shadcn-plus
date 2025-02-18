import type { HTMLAttributes } from 'svelte/elements';

export { default as DropdownMenuContent } from '$components/ui/dropdown-menu/DropdownMenuContent.svelte';

export type DropdownMenuContentProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	'class'
> & {
	ref?: HTMLDivElement | null;
	class?: string;
	portalTarget?: HTMLElement;
	side?: 'top' | 'bottom' | 'left' | 'right';
	sideOffset?: number;
	align?: 'start' | 'end' | 'center';
	preventScroll?: boolean;
};
