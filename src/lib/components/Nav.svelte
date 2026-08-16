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

	let open = $state(false);
</script>

<header class="nav">
	<div class="nav-inner">
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
				<a href={base + link.href}>{link.label}</a>
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
		justify-content: flex-end;
		padding: clamp(0.875rem, 3.5vw, 1.625rem) clamp(0.75rem, 4.7vw, 2.625rem);
	}

	.links {
		display: flex;
		justify-content: space-between;
		flex: 1;
		gap: 1.5rem;
	}

	.links a {
		font-family: var(--font-extra);
		font-size: clamp(0.5rem, 1.1vw, 0.65rem);
		letter-spacing: 0.01em;
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
			font-size: 1rem;
			opacity: 1;
		}
	}
</style>
