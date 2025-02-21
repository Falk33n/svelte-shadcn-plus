<script
	lang="ts"
	module
>
	import type { WithClassAsString, WithElementRef } from '$types';
	import { cn } from '$utils';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	export type LinkProps = WithClassAsString<
		WithElementRef<Omit<HTMLAnchorAttributes, 'href'>>
	> & { href: string };
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		class: className,
		target,
		rel = target === '_blank' ? 'noopener noreferrer' : undefined,
		children,
		...restProps
	}: LinkProps = $props();
</script>

<a
	bind:this={ref}
	class={cn(
		'focus-visible:ring-ring text-primary hover:text-underline focus-visible:ring-offset-background transition-colors duration-200 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-none',
		className,
	)}
	{target}
	{rel}
	{...restProps}
>
	{@render children?.()}
</a>
