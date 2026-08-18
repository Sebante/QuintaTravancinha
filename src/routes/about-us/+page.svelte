<script>
	import PageHero from '$lib/components/PageHero.svelte';
	import aboutHero from '$lib/assets/about-hero.jpg?enhanced';
	import groupPhoto from '$lib/assets/group-photo.jpg?enhanced';

	import anaImg from '$lib/assets/team/ana.jpg?enhanced';
	import elisabethImg from '$lib/assets/team/elisabeth.jpg?enhanced';
	import ellyImg from '$lib/assets/team/elly.jpg?enhanced';
	import josImg from '$lib/assets/team/jos.jpg?enhanced';
	import klaskeImg from '$lib/assets/team/klaske.jpg?enhanced';
	import niekImg from '$lib/assets/team/niek.jpg?enhanced';
	import richieImg from '$lib/assets/team/richie.jpg?enhanced';
	import sebImg from '$lib/assets/team/seb.jpg?enhanced';

	const teamImages = {
		ana: anaImg,
		elisabeth: elisabethImg,
		elly: ellyImg,
		jos: josImg,
		klaske: klaskeImg,
		niek: niekImg,
		richie: richieImg,
		seb: sebImg
	};

	let { data } = $props();

	let positionedTeam = $derived(
		data.team.map((person, i) => ({
			...person,
			side: i % 2 === 0 ? 'right' : 'left',
			top: data.team.length > 1 ? (i / (data.team.length - 1)) * 82 + 6 : 45
		}))
	);
</script>

<svelte:head>
	<title>{data.title} — Quinta Travancinha</title>
</svelte:head>

<PageHero
	title={data.title}
	image={aboutHero}
	imageAlt="The community practicing morning stretches together on the granite outcrop at sunrise"
/>

<section class="prose-section">
	<div class="prose-wrap">
		<div class="prose-inner">
			{@html data.html}
		</div>

		<div class="avatars-flow">
			{#each positionedTeam as person (person.name)}
				<div class="floating-avatar side-{person.side}" style="top: {person.top}%">
					<div class="avatar-photo">
						<enhanced:img src={teamImages[person.image]} alt={person.name} class="avatar-img" />
					</div>
					<p class="avatar-name">{person.name}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="community-section">
	<div class="community-inner">
		<h2>Meet the Community</h2>

		<figure class="group-photo">
			<enhanced:img
				src={groupPhoto}
				alt="The Quinta Travancinha community together"
				class="group-photo-img"
			/>
		</figure>
	</div>
</section>

<style>
	.prose-section {
		padding: 5rem 2rem;
		background: var(--color-creme);
	}

	.prose-wrap {
		position: relative;
		max-width: 75rem;
		margin: 0 auto;
	}

	.prose-inner {
		position: relative;
		z-index: 1;
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

	.avatars-flow {
		display: block;
	}

	.floating-avatar {
		position: absolute;
		width: 6.5rem;
		text-align: center;
	}

	.floating-avatar.side-left {
		left: 0;
	}

	.floating-avatar.side-right {
		right: 0;
	}

	.avatar-photo {
		position: relative;
		width: 6.5rem;
		height: 6.5rem;
		border-radius: 50%;
		overflow: hidden;
		background: var(--color-light-green);
		margin: 0 auto 0.75rem;
		box-shadow: 0 2px 10px rgba(52, 31, 17, 0.15);
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
		font-size: 0.8rem;
		letter-spacing: 0.02em;
		color: var(--color-dark-brown);
		margin: 0;
	}

	/* Below this width there isn't enough margin beside the text column
	   to float photos without overlapping it, so they drop into a
	   centered row underneath the text instead. */
	@media (max-width: 1150px) {
		.avatars-flow {
			position: static;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 2rem 1.5rem;
			margin-top: 3.5rem;
		}

		.floating-avatar {
			position: static;
			top: auto !important;
		}

		.floating-avatar.side-left,
		.floating-avatar.side-right {
			left: auto;
			right: auto;
		}
	}
</style>
