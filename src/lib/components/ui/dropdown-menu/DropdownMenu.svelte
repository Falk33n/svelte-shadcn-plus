<script lang="ts">
	import type {
		DropdownMenuContextProps,
		RootProps,
	} from '$components/ui/dropdown-menu';
	import { getOrSetContext, getUniqueId } from '$utils';

	let {
		open: initialOpen = $bindable(false),
		dir,
		children,
		onOpenChange,
	}: RootProps = $props();

	let open = $state({ value: initialOpen });

	getOrSetContext<DropdownMenuContextProps>('dropdown-menu', {
		open,
		onOpenChange,
		dir: dir || 'ltr',
		uniqueId: getUniqueId(),
	});
</script>

{@render children?.()}
