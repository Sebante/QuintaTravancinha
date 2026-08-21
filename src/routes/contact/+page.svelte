<script>
	import PageHero from '$lib/components/PageHero.svelte';
	import heroImg from '$lib/assets/contact/hero.jpg?enhanced';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title} — Quinta Travancinha</title>
</svelte:head>

<PageHero
	title={data.title}
	image={heroImg}
	imageAlt="The rolling hills and granite outcrops surrounding Quinta Travancinha"
	imagePosition="center 68%"
/>

<section class="contact-section">
	<div class="contact-inner">
		{#if data.intro}
			<p class="intro-text">{data.intro}</p>
		{/if}

		<div class="contact-card">
			<a class="contact-row" href="mailto:{data.email}">
				<span class="emoji" aria-hidden="true">✉️</span>
				<span>{data.email}</span>
			</a>
			<a class="contact-row" href={data.instagramUrl} target="_blank" rel="noopener noreferrer">
				<span class="emoji" aria-hidden="true">📷</span>
				<span>{data.instagramHandle}</span>
			</a>
		</div>

		{#if data.mapEmbedUrl}
			<div class="map-wrap">
				<iframe
					class="map-embed"
					src={data.mapEmbedUrl}
					title="Quinta Travancinha location"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
			{#if data.mapsUrl}
				<a class="map-directions-link" href={data.mapsUrl} target="_blank" rel="noopener noreferrer">
					<span class="emoji" aria-hidden="true">📍</span>
					Get directions on Google Maps
				</a>
			{/if}
		{:else if data.mapsUrl}
			<div class="map-wrap">
				<a class="map-link" href={data.mapsUrl} target="_blank" rel="noopener noreferrer">
					<span class="emoji" aria-hidden="true">📍</span>
					Get directions on Google Maps
				</a>
			</div>
		{/if}
	</div>
</section>

<style>
	.contact-section {
		padding: 5rem 2rem 6rem;
		background: var(--color-creme);
	}

	.contact-inner {
		max-width: 34rem;
		margin: 0 auto;
		text-align: center;
	}

	.intro-text {
		color: var(--color-dark-brown);
		font-size: 1.1rem;
		line-height: 1.65;
		margin: 0 0 2.5rem;
	}

	.contact-card {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background: #fff;
		border-radius: 8px;
		padding: 2rem;
		box-shadow: 0 4px 18px rgba(52, 31, 17, 0.1);
		margin-bottom: 2.5rem;
	}

	.contact-row {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.65rem;
		color: var(--color-dark-brown);
		font-size: 1.1rem;
		text-decoration: none;
	}

	.contact-row:hover {
		color: var(--color-dark-green);
	}

	.emoji {
		font-size: 1.25rem;
		line-height: 1;
	}

	.map-wrap {
		display: flex;
		justify-content: center;
		margin-bottom: 1.25rem;
	}

	.map-embed {
		width: 100%;
		aspect-ratio: 16 / 10;
		border: 0;
		border-radius: 8px;
		box-shadow: 0 4px 18px rgba(52, 31, 17, 0.1);
	}

	.map-directions-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--color-dark-green);
		font-family: var(--font-extra);
		font-size: 0.9rem;
		font-weight: 600;
		text-decoration: none;
	}

	.map-directions-link:hover {
		text-decoration: underline;
	}

	.map-link {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.9rem 2rem;
		background: var(--color-dark-green);
		color: #fff;
		font-family: var(--font-extra);
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 0.03em;
		font-weight: 600;
		text-decoration: none;
		border-radius: 4px;
	}

	.map-link:hover {
		background: var(--color-dark-brown);
	}
</style>
