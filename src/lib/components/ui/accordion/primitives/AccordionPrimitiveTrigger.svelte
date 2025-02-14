<script
	lang="ts"
	module
>
	import { Accordion as AccordionPrimitive, type WithoutChild } from 'bits-ui';

	export type AccordionPrimitiveTriggerProps =
		WithoutChild<AccordionPrimitive.TriggerProps> & {
			level?: AccordionPrimitive.HeaderProps['level'];
		};
</script>

<script lang="ts">
	import { cn } from '$src/lib/utils';
	import { ChevronDown } from 'lucide-svelte';

	type HTMLButtonElementRef = HTMLButtonElement | null;

	let {
		ref = $bindable<HTMLButtonElementRef>(null),
		class: className,
		level = 3,
		children,
		...restProps
	}: AccordionPrimitiveTriggerProps = $props();
</script>

<AccordionPrimitive.Header
	{level}
	class="flex"
>
	<AccordionPrimitive.Trigger
		bind:ref
		class={cn(
			'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
			className,
		)}
		{...restProps}
	>
		{@render children?.()}
		<ChevronDown
			class="size-4 text-muted-foreground transition-transform duration-200 shrink-0"
			aria-hidden
		/>
	</AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
