<script>
    import Header2 from "$lib/header2.svelte";
    import Footer from "$lib/footer.svelte";
    import Why1 from "$lib/why1.svelte";
    import How1 from "$lib/how1.svelte";
    import Cont from "$lib/contactUs.svelte";

</script>
<main>
    <Header2/>
    <div class = "paragraph"> <span style="--d: .05s">
    <Why1/>
    <How1/>
    <Cont/>
</span>
    </div>
    <Footer/>
</main>


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