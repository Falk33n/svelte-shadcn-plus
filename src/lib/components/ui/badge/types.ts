import type { badgeVariants } from '$components/ui/badge';
import type { WithElementRef } from '$types';
import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';

type AnchorElement = WithElementRef<HTMLAnchorAttributes>;

type SpanElement = WithElementRef<HTMLAttributes<HTMLSpanElement>> & {
	href?: never;
	rel?: never;
	target?: never;
};

export type BadgeProps = (AnchorElement | SpanElement) & {
	variant?: VariantProps<typeof badgeVariants>['variant'];
	size?: VariantProps<typeof badgeVariants>['size'];
};
