<script>
	const links = [
		{ href: '/about-us', label: 'About us' },
		{ href: '/our-mission', label: 'Our mission' },
		{ href: '/the-place', label: 'The place' },
		{ href: '/volunteer', label: 'Volunteer' },
		{ href: '/guests', label: 'Guests' },
		{ href: '/events', label: 'Events' },
		{ href: '/contact', label: 'Contact' }
	];

	let open = $state(false);
</script>

<header class="nav">
	<div class="nav-inner">
		<a class="brand" href="/">Quinta Travancinha</a>

		<button
			class="menu-toggle"
			aria-expanded={open}
			aria-label="Toggle navigation"
			onclick={() => (open = !open)}
		>
			<span></span>
			<span></span>
			<span></span>
		</button>

		<nav class="links" class:open>
			{#each links as link (link.href)}
				<a href={link.href}>{link.label}</a>
			{/each}
		</nav>
	</div>
</header>

<style>
	.nav {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 10;
		background: transparent;
	}

	.nav-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 1200px;
		margin: 0 auto;
		padding: 1.75rem 2rem;
	}

	.brand {
		font-family: var(--font-title);
		font-size: 1.25rem;
		color: #fff;
		text-decoration: none;
		letter-spacing: 0.02em;
	}

	.links {
		display: flex;
		gap: 2rem;
	}

	.links a {
		font-family: var(--font-extra);
		font-size: 0.875rem;
		letter-spacing: 0.03em;
		text-transform: uppercase;
		color: #fff;
		text-decoration: none;
		opacity: 0.9;
		transition: opacity 0.15s ease;
	}

	.links a:hover {
		opacity: 1;
	}

	.menu-toggle {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
	}

	.menu-toggle span {
		display: block;
		width: 22px;
		height: 2px;
		background: #fff;
	}

	@media (max-width: 800px) {
		.menu-toggle {
			display: flex;
		}

		.links {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			flex-direction: column;
			gap: 0;
			background: var(--color-dark-brown);
			max-height: 0;
			overflow: hidden;
			transition: max-height 0.2s ease;
		}

		.links.open {
			max-height: 24rem;
		}

		.links a {
			padding: 1rem 2rem;
			opacity: 1;
		}
	}
</style>
