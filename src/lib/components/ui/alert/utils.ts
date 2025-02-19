import { tv } from 'tailwind-variants';

export const alertVariants = tv({
	base: 'relative w-full bg-background rounded-lg border p-4 [&:has(svg)]:pl-12 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4',
	variants: {
		variant: {
			default:
				'border-destructive/60 text-destructive dark:border-destructive [&>svg]:text-destructive',
			info: 'text-foreground [&>svg]:text-foreground',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});
