<script
	lang="ts"
	module
>
	import type { WithClassAsString, WithElementRef } from '$types';
	import { cn } from '$utils';
	import type { HTMLAttributes } from 'svelte/elements';

	export type BreadcrumbPageProps = WithClassAsString<
		WithElementRef<HTMLAttributes<HTMLSpanElement>>
	>;
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		'class': className,
		'aria-disabled': ariaDisabled = true,
		'aria-current': ariaCurrent = 'page',
		role = 'link',
		children,
		...restProps
	}: BreadcrumbPageProps = $props();
</script>

<span
	bind:this={ref}
	class={cn(
		'focus-visible:ring-ring hover:text-underline focus-visible:ring-offset-background text-foreground pointer-events-none transition-colors duration-200 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-none ',
		className,
	)}
	aria-disabled={ariaDisabled}
	aria-current={ariaCurrent}
	{role}
	{...restProps}
>
	{@render children?.()}
</span>
