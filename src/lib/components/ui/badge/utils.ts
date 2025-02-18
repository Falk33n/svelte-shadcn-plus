import { tv } from 'tailwind-variants';

export const badgeVariants = tv({
	base: 'focus:ring-ring inline-flex select-none items-center rounded-full duration-200 border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
	variants: {
		variant: {
			default:
				'bg-primary text-primary-foreground hover:bg-primary/85 border-transparent',
			secondary:
				'bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent',
			success:
				'bg-success text-success-foreground hover:bg-success/85 border-transparent',
			warning:
				'bg-warning text-warning-foreground hover:bg-warning/85 border-transparent',
			danger:
				'bg-danger text-danger-foreground hover:bg-danger/85 border-transparent',
			outline: 'text-foreground',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});
