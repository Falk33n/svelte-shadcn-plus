<script lang="ts">
	import { CircleAlertIcon, InfoIcon } from '$components/icons';
	import { alertVariants, type AlertProps } from '$components/ui/alert';
	import { cn } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		icon: Icon,
		role,
		variant,
		children,
		...restProps
	}: AlertProps = $props();
</script>

<div
	bind:this={ref}
	class={cn(alertVariants({ variant, className: className as string }))}
	role={role !== undefined ? role : 'alert'}
	{...restProps}
>
	{#if Icon}
		<Icon class="size-5" />
	{:else if variant !== undefined && variant === 'info'}
		<InfoIcon class="size-5" />
	{:else}
		<CircleAlertIcon class="size-5" />
	{/if}

	{@render children?.()}
</div>
