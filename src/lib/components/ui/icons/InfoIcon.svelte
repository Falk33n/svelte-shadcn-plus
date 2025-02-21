<script
	lang="ts"
	module
>
	import type { IconProps } from '$components/ui/icons';
	import { cn } from '$utils';
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		'class': className,
		'aria-hidden': ariaHidden = true,
		...restProps
	}: IconProps = $props();
</script>

<svg
	bind:this={ref}
	class={className ? cn(className) : undefined}
	aria-hidden={ariaHidden}
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
	<circle
		cx="12"
		cy="12"
		r="10"
	/>
	<path d="M12 16v-4" />
	<path d="M12 8h.01" />
</svg>
