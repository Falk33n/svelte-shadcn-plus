<script lang="ts">
	import type {
		DropdownMenuContextProps,
		DropdownMenuProps,
	} from '$components/ui/dropdown-menu';
	import { getOrSetContext } from '$utils';

	let {
		open: bindableOpen = $bindable(false),
		dir = 'ltr',
		children,
		onOpenChange,
	}: DropdownMenuProps = $props();

	let open = $state({ value: bindableOpen });

	getOrSetContext<DropdownMenuContextProps>('dropdown-menu', {
		open,
		onOpenChange,
		dir,
		uniqueId: crypto.randomUUID(),
	});
</script>

{@render children?.()}
