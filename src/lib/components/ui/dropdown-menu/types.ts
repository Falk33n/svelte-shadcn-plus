import type { ButtonProps } from '$components/ui/button';
import type {
	WithChild,
	WithChildren,
	WithElementRef,
	WithoutChildren,
} from '$types';
import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';

export type DropdownMenuProps = WithChildren<{
	open?: boolean;
	onOpenChange?: (newValue: boolean) => void;
	dir?: 'ltr' | 'rtl';
}>;

export type DropdownMenuContextProps = WithoutChildren<
	Omit<DropdownMenuProps, 'open'> & {
		open: { value: boolean };
		uniqueId?: string;
	}
>;

type DropdownMenuTriggerChildProps = WithElementRef<HTMLButtonAttributes>;

export type DropdownMenuTriggerProps = WithElementRef<
	WithChild<HTMLButtonAttributes, DropdownMenuTriggerChildProps> & {
		variant?: ButtonProps['variant'];
		size?: ButtonProps['size'];
	}
>;

export type DropdownMenuContentProps = WithElementRef<
	HTMLAttributes<HTMLDivElement>
> & {
	portalTarget?: HTMLElement;
	side?: 'top' | 'bottom' | 'left' | 'right';
	sideOffset?: number;
	align?: 'start' | 'end' | 'center';
	preventScroll?: boolean;
};
