<script>
	import PageHero from './PageHero.svelte';

	let { title, message } = $props();
</script>

<PageHero {title} />

<section class="coming-soon">
	<p class="eyebrow">Coming soon</p>
	<p class="message">{message}</p>
</section>

<style>
	.coming-soon {
		padding: 6rem 2rem;
		background: var(--color-creme);
		text-align: center;
	}

	.eyebrow {
		font-family: var(--font-extra);
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-dark-green);
		font-weight: 700;
		margin: 0 0 1rem;
	}

	.message {
		max-width: 32rem;
		margin: 0 auto;
		color: var(--color-dark-brown);
		font-size: 1.1rem;
		line-height: 1.65;
	}
</style>
