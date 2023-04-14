<script>
    import Header from "$lib/header.svelte";
    import Mainphoto from "$lib/mainlogo.svelte";
    import Appadv from "$lib/appAd.svelte";
    import Footer from "$lib/footer.svelte";
</script>

<slot></slot>

<Header/>
<div class = "paragraph"> <span style="--d: .05s">
<Mainphoto/>
<Appadv/>
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