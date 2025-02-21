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
	import type { HTMLImgAttributes } from 'svelte/elements';

	export type ImageProps = WithClassAsString<
		WithElementRef<WithoutChildren<Omit<HTMLImgAttributes, 'src' | 'alt'>>>
	> & {
		src: string;
		alt: string;
	};
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		class: className,
		loading = 'lazy',
		...restProps
	}: ImageProps = $props();
</script>

<img
	bind:this={ref}
	class={className ? cn(className) : undefined}
	{loading}
	{...restProps}
/>
