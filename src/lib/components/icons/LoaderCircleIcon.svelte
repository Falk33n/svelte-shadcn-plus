<script lang="ts">
	import type { IconProps } from '$components/icons';
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		'class': className,
		'aria-hidden': ariaHidden,
		...restProps
	}: IconProps = $props();
</script>

<svg
	bind:this={ref}
	class={className ? cn(className) : undefined}
	aria-hidden={ariaHidden !== undefined ? ariaHidden : true}
	xmlns="http://www.w3.org/2000/svg"
	width="24"
	height="24"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	{...restProps}
>
	<path d="M21 12a9 9 0 1 1-6.219-8.56" />
</svg>
