<script>
	import { TWEMOJI_CDN } from "$lib/constants";
	import { shortCodesToEmojis } from "$lib/stores";

	export let shortCode;
	export let className = "size-4";
</script>

{#if $shortCodesToEmojis[shortCode]}
	<img
		src="{TWEMOJI_CDN}/{$shortCodesToEmojis[
			shortCode
		].toLowerCase()}.svg"
		alt={shortCode}
		class={className}
		loading="lazy"
	/>
{:else}
	<div>
		{shortCode}
	</div>
{/if}
