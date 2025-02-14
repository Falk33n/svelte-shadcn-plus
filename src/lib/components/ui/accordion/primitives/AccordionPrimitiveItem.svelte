<script
	lang="ts"
	module
>
	import { Accordion as AccordionPrimitive, type WithoutChild } from 'bits-ui';

	export type AccordionPrimitiveItemProps =
		WithoutChild<AccordionPrimitive.ItemProps>;
</script>

<script lang="ts">
	import { cn } from '$src/lib/utils';

	type HTMLDivElementRef = HTMLDivElement | null;

	let {
		ref = $bindable<HTMLDivElementRef>(null),
		class: className,
		...restProps
	}: AccordionPrimitiveItemProps = $props();
</script>

<AccordionPrimitive.Item
	bind:ref
	class={cn('border-b', className)}
	{...restProps}
/>
