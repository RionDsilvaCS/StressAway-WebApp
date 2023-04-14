<script> 
    import Header2 from "$lib/header2.svelte";
    import Login from "$lib/login.svelte";
    import Footer from "$lib/footer.svelte";
</script>

<Header2/>
<div class = "paragraph"> <span style="--d: .05s">
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