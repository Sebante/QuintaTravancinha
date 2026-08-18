<script>
	let { title, image, imageAlt = '' } = $props();
</script>

<section class="page-hero">
	{#if image}
		<enhanced:img src={image} alt={imageAlt} class="page-hero-photo" fetchpriority="high" />
	{:else}
		<!-- Placeholder gradient — swap for a real photo once one is available for this page. -->
		<div class="page-hero-bg" aria-hidden="true"></div>
	{/if}
	<div class="scrim" aria-hidden="true"></div>

	<h1>{title}</h1>
</section>

<style>
	.page-hero {
		position: relative;
		min-height: 46vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.page-hero-bg {
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, var(--color-dark-green) 0%, var(--color-dark-brown) 100%);
	}

	.page-hero :global(.page-hero-photo) {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.scrim {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.15);
	}

	h1 {
		position: relative;
		z-index: 1;
		font-family: var(--font-title);
		font-size: clamp(1.375rem, 4.75vw, 1.9rem);
		font-weight: 700;
		color: #fff;
		letter-spacing: 0.01em;
		text-align: center;
		padding: 0 1.5rem;
	}
</style>
