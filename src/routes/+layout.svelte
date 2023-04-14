<!-- 
<script>
// @ts-nocheck

	import { onMount } from 'svelte';
	import { auth, db } from '$lib/firebaseConfig';
	import { doc, getDoc, setDoc } from 'firebase/firestore';
	import { authStore, dbHandler } from '../stores/authStore';
	const nonAuthRoutes = ['/login'];
	onMount(() => {
		const unsubscribe = auth.onAuthStateChanged(async (user) => {
			const currentPath = window.location.pathname;
			if (!user && !nonAuthRoutes.includes(currentPath)) {
				window.location.href = '/login';
				return;
			}
			if (user && currentPath === '/') {
				window.location.href = '/dashboard';
				return;
			};
		});
	});
</script>

<main class="mainContainer">
	<slot />
</main>

<style>
	.mainContainer {
		position: relative;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style> -->

<slot/>