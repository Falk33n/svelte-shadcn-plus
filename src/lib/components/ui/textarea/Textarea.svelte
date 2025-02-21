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
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	export type TextareaProps = WithClassAsString<
		WithoutChildren<WithElementRef<HTMLTextareaAttributes>>
	>;
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		...restProps
	}: TextareaProps = $props();
</script>

<textarea
	bind:this={ref}
	bind:value
	class={cn(
		'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:ring-offset-background flex field-sizing-content max-h-[200px] min-h-[80px] w-full resize-none rounded-md border px-3 py-2 focus-visible:ring-1 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
		className,
	)}
	{...restProps}
>
</textarea>
