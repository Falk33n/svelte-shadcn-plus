import { tv } from 'tailwind-variants';

export const badgeVariants = tv({
	base: 'focus-visible:ring-ring inline-flex select-none items-center rounded-full focus-visible:ring-offset-background duration-200 px-2.5 py-0.5 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1',
	variants: {
		variant: {
			default: 'bg-primary text-primary-foreground hover:bg-primary/85',
			secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
			destructive:
				'bg-destructive text-destructive-foreground hover:bg-destructive/85',
			outline: 'text-foreground border',
		},
		size: {
			base: 'text-base',
			sm: 'text-sm',
			xs: 'text-xs',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'sm',
	},
});
