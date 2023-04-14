<script> 
    import Header2 from "$lib/header2.svelte";
    import Header from "$lib/header.svelte";
    import Login from "$lib/login.svelte";
    import Footer from "$lib/footer.svelte";
    export let authCheck = false;

</script>
<slot authCheck={authCheck}></slot>
{#if authCheck}
    <Header/>
{:else}
    <Header2/>
{/if}

<Login/>
</span>
</div>
<Footer/>

<style>
    .paragraph span {
	display: block;
	opacity: 0;
	animation: reveal 0.5s forwards var(--d);
}
@keyframes reveal {
	from {
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: none;
	}
}
</style>