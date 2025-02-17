import type { badgeVariants } from '$components/ui/badge';
import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';

type AnchorElement = Omit<HTMLAnchorAttributes, 'class'> & {
	ref?: HTMLAnchorElement | null;
};

type SpanElement = Omit<HTMLAttributes<HTMLSpanElement>, 'class'> & {
	ref?: HTMLSpanElement | null;
	href?: never;
	rel?: never;
	target?: never;
};

export type BadgeProps = (AnchorElement | SpanElement) & {
	variant?: VariantProps<typeof badgeVariants>['variant'];
	class?: string;
};
