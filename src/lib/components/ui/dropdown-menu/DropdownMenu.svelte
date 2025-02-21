<script
	lang="ts"
	module
>
	import type { WithChildren, WithoutChildren } from '$types';
	import { getUniqueId } from '$utils';
	import { getContext, hasContext, setContext } from 'svelte';

	export type DropdownMenuProps = WithChildren<{
		open?: boolean;
		onOpenChange?: (open: boolean) => void;
		dir?: 'ltr' | 'rtl';
	}>;

	export type DropdownMenuContextProps = WithoutChildren<
		Omit<DropdownMenuProps, 'open'> & {
			open: { value: boolean };
			uniqueId: string;
		}
	>;

	export const getDropdownMenuContext = () => {
		if (!hasContext('dropdown-menu')) {
			throw new ReferenceError(
				'DropdownMenu Context was not found. Ensure the component is inside the correct provider.',
			);
		}

		return getContext<DropdownMenuContextProps>('dropdown-menu');
	};
</script>

<script lang="ts">
	let {
		open: initialOpen = $bindable(false),
		dir,
		children,
		onOpenChange,
	}: DropdownMenuProps = $props();

	let open = $state({ value: initialOpen });

	setContext('dropdown-menu', {
		open,
		onOpenChange,
		dir,
		uniqueId: getUniqueId(),
	});
</script>

{@render children?.()}
