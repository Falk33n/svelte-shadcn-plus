import type { Snippet } from 'svelte';

export { default as DropdownMenu } from '$components/ui/dropdown-menu/DropdownMenu.svelte';

export type DropdownMenuProps = {
	open?: boolean;
	onOpenChange?: (newValue: boolean) => void;
	children?: Snippet;
	dir?: 'ltr' | 'rtl';
};

export type DropdownMenuContextProps = Omit<
	DropdownMenuProps,
	'children' | 'open'
> & {
	open: { value: boolean };
	uniqueId?: string;
};
