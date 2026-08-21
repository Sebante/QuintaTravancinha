<script>
	import ComingSoon from '$lib/components/ComingSoon.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title} — Quinta Travancinha</title>
</svelte:head>

<ComingSoon title={data.title} message={data.message} />
