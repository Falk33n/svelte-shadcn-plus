<script
	lang="ts"
	module
>
	import { ChevronRightIcon, type WithIcon } from '$components/ui/icons';
	import type {
		WithClassAsString,
		WithElementRef,
		WithoutChildren,
	} from '$types';
	import { cn } from '$utils';
	import type { HTMLAttributes } from 'svelte/elements';

	export type BreadcrumbSeparatorProps = WithIcon<
		WithClassAsString<
			WithoutChildren<WithElementRef<HTMLAttributes<HTMLLIElement>>>
		>
	>;
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		'class': className,
		'aria-hidden': ariaHidden = true,
		'icon': Icon = ChevronRightIcon,
		...restProps
	}: BreadcrumbSeparatorProps = $props();
</script>

<li
	bind:this={ref}
	class={className ? cn(className) : undefined}
	aria-hidden={ariaHidden}
	{...restProps}
>
	<Icon class="size-4" />
</li>
