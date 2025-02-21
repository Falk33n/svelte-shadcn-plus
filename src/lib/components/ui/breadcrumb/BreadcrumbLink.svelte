<script
	lang="ts"
	module
>
	import { type LinkProps, Link } from '$components/ui/link';
	import { cn } from '$utils';

	export type BreadcrumbLinkProps = LinkProps;
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: BreadcrumbLinkProps = $props();
</script>

<Link
	bind:ref
	class={cn('text-muted-foreground hover:text-foreground', className)}
	{...restProps}
>
	{@render children?.()}
</Link>
