<script>
	import { base } from '$app/paths';

	const links = [
		{ href: '/about-us', label: 'About us' },
		{ href: '/our-mission', label: 'Our mission' },
		{ href: '/the-place', label: 'The place' },
		{ href: '/volunteer', label: 'Volunteer' },
		{ href: '/guests', label: 'Guests' },
		{ href: '/events', label: 'Events' },
		{ href: '/contact', label: 'Contact' }
	];

	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="footer-inner">
		<p class="brand">Quinta Travancinha</p>

		<nav class="links">
			{#each links as link (link.href)}
				<a href={base + link.href}>{link.label}</a>
			{/each}
		</nav>

		<p class="meta">&copy; {year} Quinta Travancinha &middot; [address]</p>
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
