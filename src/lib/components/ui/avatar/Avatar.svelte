<script lang="ts">
	import type { AvatarContextProps, AvatarProps } from '$components/ui/avatar';
	import { cn, getOrSetContext } from '$utils';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: AvatarProps = $props();

	let imageStatus = $state<AvatarContextProps['imageStatus']>({
		value: 'loading',
	});

	getOrSetContext<AvatarContextProps>('avatar', { imageStatus });
</script>

<figure
	bind:this={ref}
	class={cn(
		'bg-secondary text-muted-foreground size-10 overflow-hidden rounded-full border font-medium uppercase',
		className,
	)}
	{...restProps}
>
	{@render children?.()}
</figure>
