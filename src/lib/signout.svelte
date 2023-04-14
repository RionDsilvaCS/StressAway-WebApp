<script>
    import { signOut } from 'firebase/auth';
	import { auth } from '$lib/firebaseConfig'


     let isNewUser = false;
     async function handleSubmit() {
			if (!isNewUser) {
				await signOut(auth);
			} else {
				//error.
				return;
			}
	 }
</script>
<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
<div class="authContainer">
	<h1>you're already logged In</h1>
	<form>
		<button class="saveit" type="submit" on:click={handleSubmit}><span>SignOut</span></button>
	</form>
</div>

<style>

    .authContainer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 1;
		align-items: center;
        font-family: "Poppins",sans-serif;
		padding: 24px;
		margin-top: 2%;
		margin-bottom: 10%;
	}
	form {
		display: flex;
        padding-top: 5%;
		flex-direction: column;
	}
	form {
		width: 400px;
		max-width: 100%;
		gap: 24px;
		margin: 0 auto;
	}
    
	h1 {
		font-size: 3rem;
		margin-bottom: 10px;
        
	}
    .saveit {
  border: none;
  display: block;
  text-align: left;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  position: relative;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  background-color: #ffffff;
  padding: 15px 60px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.20);
  font-family: "Poppins",sans-serif;
}

.saveit span {
  position: relative; 
  color: #1e3b41;
  z-index: 1;
  padding-left: 40%;
}

.saveit:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 1000%;
  width: 110%;
  background: #89fa9d;
  -webkit-transition: all .5s ease-in-out;
  transition: all .5s ease-in-out;
  -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
  transform: translateX(-138%) translateY(-25%) rotate(45deg);
  
}

.saveit:hover:after {
  -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
  transform: translateX(-9%) translateY(-25%) rotate(45deg);
  
}



.saveit:active {
  transform: translate(0em, 0.15em);
}


.saveit:active::before {
  transform: translate3d(0, 0, -1em);
  box-shadow: 0 0 0 2px var(--colorShadeB), 0 0.25em 0 0 var(--colorShadeB);
}
        
</style>