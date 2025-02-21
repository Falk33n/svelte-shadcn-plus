<script
	lang="ts"
	module
>
	import { page } from '$app/state';
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
		'class': className,
		href,
		target,
		'aria-current': ariaCurrent = page.url.pathname === href
			? 'page'
			: undefined,
		rel = target === '_blank' ? 'noopener noreferrer' : undefined,
		children,
		...restProps
	}: LinkProps = $props();
</script>

<a
	bind:this={ref}
	class={cn(
		'focus-visible:ring-ring text-primary focus-visible:ring-offset-background transition-colors duration-200 hover:underline hover:underline-offset-2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-none',
		className,
	)}
	aria-current={ariaCurrent}
	{target}
	{rel}
	{href}
	{...restProps}
>
	{@render children?.()}
</a>
