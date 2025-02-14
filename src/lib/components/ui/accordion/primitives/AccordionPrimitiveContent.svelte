<script
	lang="ts"
	module
>
	import { Accordion as AccordionPrimitive, type WithoutChild } from 'bits-ui';

	export type AccordionPrimitiveContentProps =
		WithoutChild<AccordionPrimitive.ContentProps>;
</script>

<script lang="ts">
	import { cn } from '$src/lib/utils';

	type HTMLDivElementRef = HTMLDivElement | null;

	let {
		ref = $bindable<HTMLDivElementRef>(null),
		class: className,
		children,
		...restProps
	}: AccordionPrimitiveContentProps = $props();
</script>

<AccordionPrimitive.Content
	bind:ref
	class={cn(
		'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm',
		className,
	)}
	{...restProps}
>
	<div class="pt-0 pb-4">
		{@render children?.()}
	</div>
</AccordionPrimitive.Content>
