<script>
	import PageHero from '$lib/components/PageHero.svelte';

	import heroImg from '$lib/assets/the-place/hero.jpg?enhanced';
	import rockImg from '$lib/assets/the-place/rock.jpg?enhanced';
	import poolImg from '$lib/assets/the-place/pool.jpg?enhanced';
	import landscapeImg from '$lib/assets/the-place/landscape.jpg?enhanced';
	import riverImg from '$lib/assets/the-place/river.jpg?enhanced';
	import riverAdventureImg from '$lib/assets/the-place/river-adventure.jpg?enhanced';
	import junglePathImg from '$lib/assets/the-place/jungle-path.jpg?enhanced';
	import livingRoomImg from '$lib/assets/the-place/living-room.jpg?enhanced';
	import houseThroughJungleImg from '$lib/assets/the-place/house-through-jungle.jpg?enhanced';
	import courtyardImg from '$lib/assets/the-place/courtyard.jpg?enhanced';
	import cobHouse1Img from '$lib/assets/the-place/cob-house-1.jpg?enhanced';
	import cobHouse2Img from '$lib/assets/the-place/cob-house-2.jpg?enhanced';
	import cobHouse3Img from '$lib/assets/the-place/cob-house-3.jpg?enhanced';
	import cobHouseDetailImg from '$lib/assets/the-place/cob-house-detail.jpg?enhanced';
	import gardenImg from '$lib/assets/the-place/garden.jpg?enhanced';

	const images = {
		rock: rockImg,
		pool: poolImg,
		landscape: landscapeImg,
		river: riverImg,
		riverAdventure: riverAdventureImg,
		junglePath: junglePathImg,
		livingRoom: livingRoomImg,
		houseThroughJungle: houseThroughJungleImg,
		courtyard: courtyardImg,
		cobHouse1: cobHouse1Img,
		cobHouse2: cobHouse2Img,
		cobHouse3: cobHouse3Img,
		cobHouseDetail: cobHouseDetailImg,
		garden: gardenImg
	};

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title} — Quinta Travancinha</title>
</svelte:head>

<PageHero title={data.title} image={heroImg} imageAlt="The valley and buildings of Quinta Travancinha, seen from above" />

<section class="intro-section">
	<p class="intro">{data.intro}</p>
</section>

<figure class="featured">
	<enhanced:img src={images[data.featured[0].image]} alt="" class="featured-img" />
	<figcaption>{data.featured[0].caption}</figcaption>
</figure>

<section class="grid-section">
	<div class="grid">
		{#each data.grids[0].images as key (key)}
			<div class="grid-photo">
				<enhanced:img src={images[key]} alt="" class="grid-img" />
			</div>
		{/each}
	</div>
</section>

<figure class="featured">
	<enhanced:img src={images[data.featured[1].image]} alt="" class="featured-img" />
	<figcaption>{data.featured[1].caption}</figcaption>
</figure>

<section class="grid-section">
	<div class="grid grid-3">
		{#each data.grids[1].images as key (key)}
			<div class="grid-photo">
				<enhanced:img src={images[key]} alt="" class="grid-img" />
			</div>
		{/each}
	</div>
</section>

<section class="cob-section">
	<h2>{data.cobHouses.heading}</h2>
	<p class="cob-caption">{data.cobHouses.caption}</p>
	<div class="grid">
		{#each data.cobHouses.images as key (key)}
			<div class="grid-photo">
				<enhanced:img src={images[key]} alt="" class="grid-img" />
			</div>
		{/each}
	</div>
</section>

<figure class="featured featured-closing">
	<enhanced:img src={images[data.closing.image]} alt="" class="featured-img" />
	<figcaption>{data.closing.caption}</figcaption>
</figure>

<style>
	.intro-section {
		padding: 5rem 2rem 4rem;
		background: var(--color-creme);
	}

	.intro {
		max-width: 38rem;
		margin: 0 auto;
		text-align: center;
		font-size: 1.15rem;
		color: var(--color-dark-brown);
	}

	.featured {
		margin: 0;
		background: var(--color-creme);
		padding: 0 0 4rem;
	}

	.featured-closing {
		padding-bottom: 5rem;
	}

	.featured :global(.featured-img) {
		width: 100%;
		height: 34rem;
		object-fit: cover;
		display: block;
	}

	.featured figcaption {
		font-family: var(--font-extra);
		font-size: 0.9rem;
		letter-spacing: 0.01em;
		color: var(--color-grey);
		text-align: center;
		padding: 1rem 2rem 0;
	}

	.grid-section {
		padding: 0 2rem 4rem;
		background: var(--color-creme);
	}

	.grid {
		max-width: 72rem;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		gap: 1.25rem;
	}

	.grid-3 {
		grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
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

	.cob-section {
		padding: 1rem 2rem 5rem;
		background: #fff;
		text-align: center;
	}

	.cob-section h2 {
		font-size: clamp(1.5rem, 2.5vw, 1.9rem);
		margin-bottom: 0.75rem;
	}

	.cob-caption {
		max-width: 34rem;
		margin: 0 auto 2.5rem;
		color: var(--color-grey);
		font-size: 1rem;
	}

	.cob-section .grid {
		text-align: left;
	}

	@media (max-width: 700px) {
		.featured :global(.featured-img) {
			height: 22rem;
		}
	}
</style>
