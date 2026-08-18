<script>
	import { base } from '$app/paths';
	import logo from '$lib/assets/logo-white.png?enhanced';

	const links = [
		{ href: '/about-us', label: 'About us' },
		{ href: '/the-place', label: 'The place' },
		{ href: '/volunteer', label: 'Volunteer' },
		{ href: '/guests', label: 'Guests' },
		{ href: '/residency', label: 'Residency' },
		{ href: '/contact', label: 'Contact' }
	];

	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="footer-inner">
		<a class="logo-link" href={base + '/'} aria-label="Quinta Travancinha home">
			<enhanced:img src={logo} alt="" class="logo-img" />
		</a>
		<p class="brand">Quinta Travancinha</p>

		<nav class="links">
			{#each links as link (link.href)}
				<a href={base + link.href}>{link.label}</a>
			{/each}
		</nav>

		<p class="meta">&copy; {year} Quinta Travancinha</p>
	</div>
</footer>

<style>
	.footer {
		background: var(--color-dark-green);
		color: var(--color-creme);
		padding: 3rem 2rem 2rem;
	}

	.footer-inner {
		max-width: 1200px;
		margin: 0 auto;
		text-align: center;
	}

	.logo-link {
		display: block;
		width: 3.5rem;
		height: 3.5rem;
		margin: 0 auto 1rem;
	}

	.logo-link :global(picture) {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
	}

	.logo-link :global(.logo-img) {
		width: 100%;
		height: 100%;
		object-fit: contain;
		display: block;
	}

	.brand {
		font-family: var(--font-title);
		font-size: 1.25rem;
		color: var(--color-creme);
		margin: 0 0 1.5rem;
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.links a {
		font-family: var(--font-extra);
		font-size: 0.8rem;
		letter-spacing: 0.03em;
		text-transform: uppercase;
		color: var(--color-creme);
		text-decoration: none;
		opacity: 0.85;
	}

	.links a:hover {
		opacity: 1;
	}

	.meta {
		font-family: var(--font-extra);
		font-size: 0.75rem;
		color: var(--color-light-green);
		margin: 0;
	}
</style>
