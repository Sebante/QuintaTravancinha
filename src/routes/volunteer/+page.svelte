<script>
	import { base } from '$app/paths';
	import PageHero from '$lib/components/PageHero.svelte';

	import heroImg from '$lib/assets/volunteer/hero.jpg?enhanced';
	import foodForest1Img from '$lib/assets/volunteer/food-forest-1.jpg?enhanced';
	import foodForest2Img from '$lib/assets/volunteer/food-forest-2.jpg?enhanced';
	import irrigationPipesImg from '$lib/assets/volunteer/irrigation-pipes.jpg?enhanced';
	import irrigationValveBoxImg from '$lib/assets/volunteer/irrigation-valve-box.jpg?enhanced';
	import irrigationDiagramImg from '$lib/assets/volunteer/irrigation-diagram.png?enhanced';
	import irrigationChecklistImg from '$lib/assets/volunteer/irrigation-checklist.png?enhanced';
	import poolFilledImg from '$lib/assets/volunteer/pool-filled.jpg?enhanced';
	import poolFiltrationZoneImg from '$lib/assets/volunteer/pool-filtration-zone.jpg?enhanced';
	import poolSiteImg from '$lib/assets/volunteer/pool-site.jpg?enhanced';
	import poolSunsetImg from '$lib/assets/volunteer/pool-sunset.jpg?enhanced';
	import cobHouse1Img from '$lib/assets/the-place/cob-house-1.jpg?enhanced';
	import cobHouse2Img from '$lib/assets/the-place/cob-house-2.jpg?enhanced';
	import cobHouse3Img from '$lib/assets/the-place/cob-house-3.jpg?enhanced';
	import cobHouseDetailImg from '$lib/assets/the-place/cob-house-detail.jpg?enhanced';

	const images = {
		foodForest1: foodForest1Img,
		foodForest2: foodForest2Img,
		irrigationPipes: irrigationPipesImg,
		irrigationValveBox: irrigationValveBoxImg,
		irrigationDiagram: irrigationDiagramImg,
		irrigationChecklist: irrigationChecklistImg,
		poolFilled: poolFilledImg,
		poolFiltrationZone: poolFiltrationZoneImg,
		poolSite: poolSiteImg,
		poolSunset: poolSunsetImg,
		cobHouse1: cobHouse1Img,
		cobHouse2: cobHouse2Img,
		cobHouse3: cobHouse3Img,
		cobHouseDetail: cobHouseDetailImg
	};

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title} — Quinta Travancinha</title>
</svelte:head>

<PageHero
	title={data.title}
	image={heroImg}
	imageAlt="A newly planted line of fruit and nut trees in the food forest, mulched and ready for summer"
/>

{#if data.intro}
	<section class="intro-section">
		<p class="intro-text">{data.intro}</p>
	</section>
{/if}

<section class="prose-section">
	<div class="prose-inner">
		<h2>{data.offer.heading}</h2>
		<ul>
			{#each data.offer.bullets as bullet (bullet)}
				<li>{bullet}</li>
			{/each}
		</ul>
		<p>{data.offer.residency}</p>

		<h2>{data.lookingFor.heading}</h2>
		{#each data.lookingFor.paragraphs as paragraph (paragraph)}
			<p>{paragraph}</p>
		{/each}

		{#if data.wwoof}
			<p class="wwoof-note">
				{data.wwoof.text}
				<a href={data.wwoof.url} target="_blank" rel="noopener noreferrer">{data.wwoof.linkText}</a>
			</p>
		{/if}
	</div>
</section>

<section class="projects-section">
	<h2 class="projects-heading">{data.projects.heading}</h2>
	{#each data.projects.items as project (project.name)}
		<div class="project">
			<div class="project-text">
				<h3>{project.name}</h3>
				{#each project.paragraphs as paragraph (paragraph)}
					<p>{paragraph}</p>
				{/each}
			</div>
			<div class="grid grid-3">
				{#each project.images as key (key)}
					<div class="grid-photo">
						<enhanced:img src={images[key]} alt="" class="grid-img" />
					</div>
				{/each}
			</div>
			{#if project.docsNote}
				<p class="docs-note">{project.docsNote}</p>
				<div class="docs-grid">
					{#each project.docsImages as key (key)}
						<div class="doc-card">
							<enhanced:img src={images[key]} alt="" class="doc-img" />
						</div>
					{/each}
				</div>
			{/if}
		</div>
	{/each}
</section>

<section class="cta-section">
	<div class="cta-inner">
		<h2>{data.cta.heading}</h2>
		{#each data.cta.paragraphs as paragraph (paragraph)}
			<p>{paragraph}</p>
		{/each}
		<a class="cta-button" href={base + '/contact'}>{data.cta.linkText}</a>
	</div>
</section>

<style>
	.intro-section {
		padding: 5rem 2rem 1rem;
		background: var(--color-creme);
		text-align: center;
	}

	.intro-text {
		max-width: 38rem;
		margin: 0 auto;
		color: var(--color-dark-brown);
		font-size: 1.1rem;
		line-height: 1.65;
	}

	.prose-section {
		padding: 4rem 2rem;
		background: #fff;
	}

	.prose-inner {
		max-width: 42rem;
		margin: 0 auto;
	}

	.prose-inner h2 {
		font-size: clamp(1.5rem, 2.5vw, 1.9rem);
		margin: 3rem 0 1.25rem;
	}

	.prose-inner h2:first-child {
		margin-top: 0;
	}

	.prose-inner p {
		color: var(--color-dark-brown);
		font-size: 1.05rem;
		margin: 0 0 1.25rem;
		line-height: 1.6;
	}

	.prose-inner ul {
		margin: 0 0 1.25rem;
		padding-left: 1.25rem;
		color: var(--color-dark-brown);
	}

	.prose-inner li {
		font-size: 1.05rem;
		margin-bottom: 0.5rem;
		line-height: 1.5;
	}

	.wwoof-note {
		color: var(--color-grey);
		font-size: 0.95rem;
	}

	.wwoof-note a {
		color: var(--color-dark-green);
		font-weight: 600;
	}

	.projects-section {
		padding: 5rem 2rem;
		background: var(--color-creme);
	}

	.projects-heading {
		max-width: 72rem;
		margin: 0 auto 3rem;
		font-size: clamp(1.75rem, 3vw, 2.25rem);
		text-align: center;
	}

	.project {
		max-width: 72rem;
		margin: 0 auto;
	}

	.project + .project {
		margin-top: 4.5rem;
	}

	.project-text {
		max-width: 42rem;
		margin: 0 auto 2rem;
		text-align: center;
	}

	.project-text h3 {
		font-size: 1.35rem;
		margin-bottom: 0.75rem;
	}

	.project-text p {
		color: var(--color-dark-brown);
		font-size: 1.02rem;
		line-height: 1.6;
		margin: 0 0 1rem;
	}

	.grid {
		max-width: 72rem;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		gap: 1.25rem;
	}

	.grid-3 {
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
	}

	.grid-photo {
		position: relative;
		width: 100%;
		aspect-ratio: 4 / 3;
		overflow: hidden;
		border-radius: 8px;
	}

	.grid-photo :global(picture) {
		position: absolute;
		inset: 0;
	}

	.grid-photo :global(.grid-img) {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.docs-note {
		max-width: 42rem;
		margin: 2.5rem auto 1.5rem;
		color: var(--color-grey);
		font-size: 0.95rem;
		text-align: center;
	}

	.docs-grid {
		max-width: 56rem;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
		gap: 1.25rem;
	}

	.doc-card {
		background: #fff;
		border: 1px solid var(--color-light-green);
		border-radius: 8px;
		padding: 0.6rem;
	}

	.doc-card :global(.doc-img) {
		width: 100%;
		height: auto;
		border-radius: 4px;
		display: block;
	}

	.cta-section {
		padding: 5rem 2rem;
		background: var(--color-light-green);
		text-align: center;
	}

	.cta-inner {
		max-width: 34rem;
		margin: 0 auto;
	}

	.cta-inner h2 {
		font-size: clamp(1.75rem, 3vw, 2.25rem);
		margin-bottom: 1.25rem;
	}

	.cta-inner p {
		color: var(--color-dark-brown);
		font-size: 1.05rem;
		margin: 0 0 0.5rem;
	}

	.cta-button {
		display: inline-block;
		margin-top: 1.75rem;
		padding: 0.9rem 2.25rem;
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

	.cta-button:hover {
		background: var(--color-dark-brown);
	}
</style>
