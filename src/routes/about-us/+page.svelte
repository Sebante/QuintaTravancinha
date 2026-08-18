<script>
	import PageHero from '$lib/components/PageHero.svelte';
	import groupPhoto from '$lib/assets/group-photo.jpg?enhanced';

	import anaImg from '$lib/assets/team/ana.jpg?enhanced';
	import elisabethImg from '$lib/assets/team/elisabeth.jpg?enhanced';
	import ellyImg from '$lib/assets/team/elly.jpg?enhanced';
	import josImg from '$lib/assets/team/jos.jpg?enhanced';
	import klaskeImg from '$lib/assets/team/klaske.jpg?enhanced';
	import richieImg from '$lib/assets/team/richie.jpg?enhanced';
	import sebImg from '$lib/assets/team/seb.jpg?enhanced';

	const teamImages = {
		ana: anaImg,
		elisabeth: elisabethImg,
		elly: ellyImg,
		jos: josImg,
		klaske: klaskeImg,
		richie: richieImg,
		seb: sebImg
	};

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title} — Quinta Travancinha</title>
</svelte:head>

<PageHero title={data.title} />

<section class="prose-section">
	<div class="prose-inner">
		{@html data.html}
	</div>
</section>

<section class="community-section">
	<div class="community-inner">
		<figure class="group-photo">
			<enhanced:img
				src={groupPhoto}
				alt="The Quinta Travancinha community together"
				class="group-photo-img"
			/>
		</figure>

		<h2>Meet the Community</h2>

		<div class="avatars">
			{#each data.team as person (person.name)}
				<div class="avatar">
					<div class="avatar-photo">
						<enhanced:img src={teamImages[person.image]} alt={person.name} class="avatar-img" />
					</div>
					<p class="avatar-name">{person.name}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.prose-section {
		padding: 5rem 2rem;
		background: var(--color-creme);
	}

	.prose-inner {
		max-width: 42rem;
		margin: 0 auto;
	}

	.prose-inner :global(h2) {
		font-size: clamp(1.5rem, 2.5vw, 1.9rem);
		margin: 3rem 0 1.25rem;
	}

	.prose-inner :global(h2:first-child) {
		margin-top: 0;
	}

	.prose-inner :global(p) {
		color: var(--color-dark-brown);
		font-size: 1.05rem;
		margin: 0 0 1.25rem;
	}

	.prose-inner :global(ul) {
		margin: 0 0 1.25rem;
		padding-left: 1.25rem;
		color: var(--color-dark-brown);
	}

	.prose-inner :global(li) {
		font-size: 1.05rem;
		margin-bottom: 0.5rem;
	}

	.group-photo {
		margin: 0 0 4rem;
		line-height: 0;
	}

	.group-photo :global(.group-photo-img) {
		width: 100%;
		height: auto;
		border-radius: 12px;
		display: block;
	}

	.community-section {
		padding: 5rem 2rem 6rem;
		background: #fff;
	}

	.community-inner {
		max-width: 64rem;
		margin: 0 auto;
		text-align: center;
	}

	.community-inner h2 {
		font-size: clamp(1.5rem, 2.5vw, 1.9rem);
		margin-bottom: 3rem;
	}

	.avatars {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2.5rem 2rem;
	}

	.avatar {
		width: 8.5rem;
	}

	.avatar-photo {
		position: relative;
		width: 8.5rem;
		height: 8.5rem;
		border-radius: 50%;
		overflow: hidden;
		background: var(--color-light-green);
		margin: 0 auto 0.9rem;
	}

	.avatar-photo :global(picture) {
		position: absolute;
		inset: 0;
	}

	.avatar-photo :global(.avatar-img) {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.avatar-name {
		font-family: var(--font-extra);
		font-size: 0.9rem;
		letter-spacing: 0.02em;
		color: var(--color-dark-brown);
		margin: 0;
	}
</style>
