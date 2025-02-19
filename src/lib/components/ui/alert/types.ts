import type { alertVariants } from '$components/ui/alert';
import type { WithIcon } from '$components/ui/icon';
import type { WithElementRef } from '$types';
import type { HTMLAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';

export type AlertProps = WithElementRef<
	WithIcon<HTMLAttributes<HTMLDivElement>>
> & {
	variant?: VariantProps<typeof alertVariants>['variant'];
};

export type AlertTitleProps = WithElementRef<HTMLAttributes<HTMLDivElement>>;
export type AlertContentProps = WithElementRef<HTMLAttributes<HTMLDivElement>>;
