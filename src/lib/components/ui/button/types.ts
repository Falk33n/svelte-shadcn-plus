import type { buttonVariants } from '$components/ui/button';
import type { WithElementRef } from '$types';
import type {
	HTMLAnchorAttributes,
	HTMLButtonAttributes,
} from 'svelte/elements';
import { type VariantProps } from 'tailwind-variants';

type AnchorElement = WithElementRef<HTMLAnchorAttributes> & {
	type?: never;
	disabled?: never;
};

type ButtonElement = WithElementRef<HTMLButtonAttributes> & {
	href?: never;
	rel?: never;
	target?: never;
};

export type ButtonProps = (AnchorElement | ButtonElement) & {
	variant?: VariantProps<typeof buttonVariants>['variant'];
	size?: VariantProps<typeof buttonVariants>['size'];
	isLoading?: boolean;
};
