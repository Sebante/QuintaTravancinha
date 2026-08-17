<script>
	import { base } from '$app/paths';
	import Hero from '$lib/components/Hero.svelte';
	import volunteerImage from '$lib/assets/volunteer.jpg?enhanced';
	import guestsImage from '$lib/assets/guests.jpg?enhanced';
	import residencyImage from '$lib/assets/residency.jpg?enhanced';

	const cardImages = {
		volunteer: volunteerImage,
		guests: guestsImage,
		residency: residencyImage
	};

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title} — {data.subtitle}</title>
</svelte:head>

<Hero title={data.title} subtitle={data.subtitle} />

<section id="intro" class="intro">
	<div class="intro-inner">
		<h2>{data.introHeading}</h2>
		<div class="prose">
			{@html data.html}
		</div>
	</div>
</section>

<section class="cards">
	<div class="cards-inner">
		{#each data.cards as card (card.href)}
			<article class="card">
				<div class="card-photo-wrap">
					<enhanced:img
						src={cardImages[card.image]}
						alt=""
						class="card-photo"
					/>
				</div>
				<div class="card-body">
					<h3>{card.title}</h3>
					<p>{card.text}</p>
					<a class="cta" href={base + card.href}>{card.cta} &rarr;</a>
				</div>
			</article>
		{/each}
	</div>
</section>

<style>
	.intro {
		padding: 6rem 2rem;
		background: var(--color-creme);
	}

	.intro-inner {
		max-width: 42rem;
		margin: 0 auto;
		text-align: center;
	}

	.intro h2 {
		font-size: clamp(1.75rem, 3vw, 2.25rem);
		margin-bottom: 1.5rem;
	}

	.prose :global(p) {
		color: var(--color-dark-brown);
		font-size: 1.05rem;
	}

	.cards {
		padding: 0 2rem 6rem;
		background: var(--color-creme);
	}

	.cards-inner {
		max-width: 72rem;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
		gap: 2rem;
	}

	.card {
		display: flex;
		flex-direction: column;
		background: #fff;
		border: 1px solid var(--color-light-green);
		border-radius: 4px;
		overflow: hidden;
		text-align: center;
	}

	.card-photo-wrap {
		position: relative;
		width: 100%;
		aspect-ratio: 4 / 3;
		overflow: hidden;
	}

	.card-photo-wrap :global(picture) {
		position: absolute;
		inset: 0;
	}

	.card-photo-wrap :global(.card-photo) {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.card-body {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 2rem 2rem 2.25rem;
	}

	.card h3 {
		font-size: 1.35rem;
		margin-bottom: 0.75rem;
	}

	.card p {
		color: var(--color-grey);
		font-size: 0.95rem;
		margin-bottom: 1.5rem;
	}

	.cta {
		font-family: var(--font-extra);
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.03em;
		color: var(--color-dark-green);
		text-decoration: none;
		font-weight: 600;
		margin-top: auto;
	}

	.cta:hover {
		text-decoration: underline;
	}
</style>
