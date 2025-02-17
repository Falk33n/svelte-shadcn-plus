import type { buttonVariants } from '$components/ui/button';
import type {
	HTMLAnchorAttributes,
	HTMLButtonAttributes,
} from 'svelte/elements';
import { type VariantProps } from 'tailwind-variants';

type AnchorElement = Omit<HTMLAnchorAttributes, 'class'> & {
	ref?: HTMLAnchorElement | null;
	type?: never;
	disabled?: never;
};

type ButtonElement = Omit<HTMLButtonAttributes, 'class'> & {
	ref?: HTMLButtonElement | null;
	href?: never;
	rel?: never;
	target?: never;
};

export type ButtonProps = (AnchorElement | ButtonElement) & {
	variant?: VariantProps<typeof buttonVariants>['variant'];
	size?: VariantProps<typeof buttonVariants>['size'];
	class?: string;
};
