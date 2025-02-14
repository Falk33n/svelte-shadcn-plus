<script
	lang="ts"
	module
>
	import {
		type AccordionPrimitiveContentProps,
		type AccordionPrimitiveItemProps,
		type AccordionPrimitiveTriggerProps,
	} from '$src/lib/components/ui/accordion/primitives';
	import { type WithoutChildren } from 'bits-ui';
	import type { Snippet } from 'svelte';

	type ItemProps = WithoutChildren<Omit<AccordionPrimitiveItemProps, 'value'>>;
	type TriggerProps = WithoutChildren<AccordionPrimitiveTriggerProps>;
	type ContentProps = WithoutChildren<AccordionPrimitiveContentProps>;

	export type AccordionItemProps = {
		value: string;
		title: string;
		content: string | Snippet<[]>;
		itemProps?: ItemProps;
		triggerProps?: TriggerProps;
		contentProps?: ContentProps;
	};
</script>

<script lang="ts">
	import {
		AccordionPrimitiveContent,
		AccordionPrimitiveItem,
		AccordionPrimitiveTrigger,
	} from '$src/lib/components/ui/accordion/primitives';

	let {
		value,
		title,
		content,
		itemProps: restItemProps,
		triggerProps: restTriggerProps,
		contentProps: restContentProps,
	}: AccordionItemProps = $props();
</script>

<AccordionPrimitiveItem
	{value}
	{...restItemProps}
>
	<AccordionPrimitiveTrigger {...restTriggerProps}>
		{title}
	</AccordionPrimitiveTrigger>
	<AccordionPrimitiveContent {...restContentProps}>
		{#if typeof content === 'string'}
			{content}
		{:else}
			{#snippet content()}
				{@render content()}
			{/snippet}
		{/if}
	</AccordionPrimitiveContent>
</AccordionPrimitiveItem>
