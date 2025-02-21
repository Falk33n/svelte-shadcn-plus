<script
	lang="ts"
	module
>
	import type {
		WithClassAsString,
		WithElementRef,
		WithoutChildren,
	} from '$types';
	import { cn } from '$utils';
	import type { HTMLInputAttributes } from 'svelte/elements';

	export type InputProps = WithClassAsString<
		WithoutChildren<WithElementRef<HTMLInputAttributes>>
	>;
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		...restProps
	}: InputProps = $props();
</script>

<input
	bind:this={ref}
	bind:value
	class={cn(
		'border-input placeholder:text-muted-foreground focus-visible:ring-offset-background focus-visible:ring-ring bg-background flex h-9 w-full rounded-md border px-3 py-1 shadow-sm transition-colors file:border-0 file:font-medium focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
		className,
	)}
	{...restProps}
/>
