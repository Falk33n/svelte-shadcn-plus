import { tv } from 'tailwind-variants';

export const buttonVariants = tv({
	base: 'focus-visible:ring-ring focus-visible:ring-offset-1 inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50',
	variants: {
		variant: {
			default:
				'bg-primary text-primary-foreground shadow hover:bg-primary/85 active:scale-[99%]',
			secondary:
				'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/60 active:scale-[99%]',
			outline:
				'border-input bg-background border shadow-sm hover:bg-accent hover:text-accent-foreground active:scale-[99%]',
			ghost:
				'bg-background text-foreground hover:bg-accent hover:text-accent-foreground active:scale-[99%]',
			info: 'bg-info text-info-foreground shadow hover:bg-info/85 active:scale-[99%]',
			success:
				'bg-success text-success-foreground shadow-sm hover:bg-success/85 active:scale-[99%]',
			warning:
				'bg-warning text-warning-foreground shadow-sm hover:bg-warning/85 active:scale-[99%]',
			danger:
				'bg-danger text-danger-foreground shadow-sm hover:bg-danger/85 active:scale-[99%]',
			link: 'bg-background text-primary hover:underline-offset-2 hover:underline',
		},
		size: {
			default: 'h-9 px-4',
			sm: 'h-8 px-3.5 text-sm',
			lg: 'h-10 px-5',
			icon: 'size-9',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
});
