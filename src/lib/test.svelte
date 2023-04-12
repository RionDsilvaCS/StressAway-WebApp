<script>
  import Avatar1 from "$lib/assets/avatar1.png"
  import Avatar2 from "$lib/assets/avatar2.png"
  import Avatar3 from "$lib/assets/avatar3.jpg"
</script>
<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
<div class="container">
  <div class="cards">
    <div class="card distress">
      <h2 class="card-title-large">Distress</h2>
      <h3 class="card-title-small">Distress</h3>
      <p class="card-description">
        Distress is an unpleasant emotion, feeling, thought, condition, or behavior. Distress can affect the way you think, feel and can make it hard to lead side effects.


      </p>
    </div>
    <div class="card instagram">
      <h2 class="card-title-large">Excitement</h2>
      <h3 class="card-title-small">Excitement</h3>
      <p class="card-description">
        Excitement is a feeling or situation full of activity, joy, exhilaration, or upheaval or the state of being emotionally aroused and worked up
      </p>
    </div>

    <div class="card facebook">
      <h2 class="card-title-large">Contentement</h2>
      <h3 class="card-title-small">Contentement</h3>
      <p class="card-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        alias, aliquid aperiam deleniti doloremque dolores est fugiat, illum
        inventore magni molestias nihil nisi optio possimus praesentium
      </p>
    </div>

    <div class="card youtube">
      <h2 class="card-title-large">Depression</h2>
      <h3 class="card-title-small">Depression</h3>
      <p class="card-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        alias, aliquid aperiam deleniti doloremque dolores est fugiat, illum
        inventore magni molestias nihil nisi optio possimus praesentium
      </p>
    </div>
  </div>
</div>




<style>

  
* {
    box-sizing: inherit;
  }
.container {
	max-width: 98rem;
	margin-inline: auto;
	padding-inline: 1.5rem;
}
.container {
	max-width: 110rem;
	padding: 1.5rem;
}
.cards {
	display: grid;
    margin-top: 4%;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1.5fr));
	grid-gap: 1.5rem;
}
.card {
	background: #262525;
	color: #fff;
	padding: 1.5rem;
	overflow: hidden;
	border-radius: 0.8rem;
}
.card-title-large {
	font-family: fantasy, sans-serif;
	font-size: 10rem;
	letter-spacing: 0.5rem;
	color: #1d1d1d;
    user-select: none;
	transform: translateX(7rem);
	transition: transform 2.5s;
}
.card-title-small {
	margin-bottom: 1rem;
}
.card-description {
	font-size: 1.4rem;
	line-height: 1.5;
}
.card:hover .card-title-large {
	transform: translateX(-115%);
	color: #fff;
}
.card.distress:hover {
	background-color: #1da1f2;
}
.card.instagram:hover {
	background: radial-gradient(
		at 20% 128%,
		#ACDF87 20%,
		#4C9A2A 60%,
		#68BB59 90%
	);
}
.card.facebook:hover {
	background-color: #4267b2;
}
.card.youtube:hover {
	background: radial-gradient(
        at 20% 128%,
        #ff5252 20%,
        #ff074f 60%) ;
}

</style>