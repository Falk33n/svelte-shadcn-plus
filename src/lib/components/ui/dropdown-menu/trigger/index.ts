import type { buttonVariants } from '$components/ui/button';
import type { Snippet } from 'svelte';
import type {
	HTMLAnchorAttributes,
	HTMLButtonAttributes,
} from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';

export { default as DropdownMenuTrigger } from '$components/ui/dropdown-menu/DropdownMenuTrigger.svelte';

export type DropdownMenuTriggerChildProps = {
	'ref'?: HTMLButtonElement | null;
	'id'?: string;
	'class'?: string;
	'aria-haspopup'?: HTMLButtonAttributes['aria-haspopup'];
	'aria-expanded'?: HTMLButtonAttributes['aria-expanded'];
	'disabled'?: HTMLButtonAttributes['disabled'];
	'onclick'?: HTMLButtonAttributes['onclick'] & HTMLAnchorAttributes['onclick'];
};

export type DropdownMenuTriggerProps = Omit<
	HTMLButtonAttributes,
	'class' | 'id'
> & {
	ref?: HTMLButtonElement | null;
	class?: string;
	child?: Snippet<[DropdownMenuTriggerChildProps]>;
	variant?: VariantProps<typeof buttonVariants>['variant'];
	size?: VariantProps<typeof buttonVariants>['size'];
};
