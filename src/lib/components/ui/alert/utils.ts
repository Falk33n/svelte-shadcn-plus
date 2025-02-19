import { tv } from 'tailwind-variants';

export const alertVariants = tv({
	base: 'relative w-full bg-background rounded-lg border p-4 [&:has(svg)]:pl-12 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4',
	variants: {
		variant: {
			default: 'text-foreground [&>svg]:text-foreground',
			warning:
				'border-warning/80 text-warning dark:border-warning [&>svg]:text-warning',
			danger:
				'border-danger/60 text-danger dark:border-danger [&>svg]:text-danger',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});
