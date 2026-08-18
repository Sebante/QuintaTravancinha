<script>
	let { title } = $props();
</script>

<section class="page-hero">
	<!-- Placeholder gradient — swap for a real photo (e.g. an <enhanced:img>)
	     once one is available for this page. -->
	<div class="page-hero-bg" aria-hidden="true"></div>
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
