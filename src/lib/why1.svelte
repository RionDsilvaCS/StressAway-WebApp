<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>

<div class="why">
    <h2 class="paragraph"><span style="--d: .05s">Why StressAWay ?</span></h2>
</div>
<div class="why2">
    <p class = "paragraph"><span style="--d: .05s">StressAway is a product that enhances the mood of a person by recommending stress relief ways based on the journal written by the person. The product analyzes the journal , understands the mood of a person and recommends different kinds of music , movies, books, exercises, food and also the places around the user’s location that boosts his/her mood.</span></p>
</div>
<style>
    .why{
  padding-top: 5%;
  color: #63CCAB;
  font-family: 'Poppins', sans-serif;
  font-size: large;
  padding-left: 13%;
}
.why2{
  color: #0f4b59;
  padding-left: 23%;
  padding-right: 18.5%;
  font-size: 19px;
  font-family: 'Poppins', sans-serif;
}
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