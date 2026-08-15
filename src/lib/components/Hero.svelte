<script>
	let { title, subtitle } = $props();
</script>

<section class="hero">
	<div class="hero-photo" aria-hidden="true"></div>
	<div class="hero-scrim" aria-hidden="true"></div>

	<div class="hero-content">
		<h1>{title}</h1>
		<p class="subtitle">{subtitle}</p>
	</div>

	<a class="chevron" href="#intro" aria-label="Scroll down">
		<svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M2 2L14 14L26 2"
				stroke="white"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</a>
</section>

<style>
	.hero {
		position: relative;
		height: 100vh;
		min-height: 32rem;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	/* Placeholder for the full-bleed quinta photograph — swap for a real
	   photo (e.g. an <enhanced:img> of the farmhouse) once available. */
	.hero-photo {
		position: absolute;
		inset: 0;
		background:
			linear-gradient(180deg, #8fb3d9 0%, #cfe0e8 38%, var(--color-light-green) 60%, var(--color-dark-green) 100%);
	}

	.hero-scrim {
		position: absolute;
		inset: 0;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.05) 30%, rgba(0, 0, 0, 0.35) 100%);
	}

	.hero-content {
		position: relative;
		z-index: 1;
		text-align: center;
		padding: 0 1.5rem;
		color: #fff;
	}

	.hero-content h1 {
		font-family: var(--font-title);
		font-size: clamp(2.5rem, 6vw, 4.5rem);
		font-weight: 700;
		color: #fff;
		margin: 0 0 0.75rem;
		letter-spacing: 0.01em;
	}

	.subtitle {
		font-family: var(--font-text);
		font-size: clamp(1rem, 2vw, 1.25rem);
		font-weight: 400;
		color: #fff;
		margin: 0;
		opacity: 0.95;
	}

	.chevron {
		position: absolute;
		bottom: 2.5rem;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1;
		display: flex;
		animation: bounce 2.2s ease-in-out infinite;
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateX(-50%) translateY(0);
		}
		50% {
			transform: translateX(-50%) translateY(8px);
		}
	}
</style>
