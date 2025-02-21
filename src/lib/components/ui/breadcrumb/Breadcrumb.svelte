<script
	lang="ts"
	module
>
	import type { WithClassAsString, WithElementRef } from '$types';
	import { cn } from '$utils';
	import type { HTMLAttributes } from 'svelte/elements';

	export type BreadcrumbProps = WithClassAsString<
		WithElementRef<HTMLAttributes<HTMLElement>>
	>;
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		'class': className,
		'aria-label': ariaLabel = 'Navigation paths',
		children,
		...restProps
	}: BreadcrumbProps = $props();
</script>

<nav
	bind:this={ref}
	class={className ? cn(className) : undefined}
	aria-label={ariaLabel}
	{...restProps}
>
	{@render children?.()}
</nav>
