<script>
    import { authHandler } from '../stores/authStore';

     let email = '';
     let pass = '';
     let confirmPass = '';

     let isNewUser = false;
     let error = false;
     async function handleSubmit() {
		try {
			if (!isNewUser && email != '' && pass != '') {
				await authHandler.login(email, pass);
			}
			if (isNewUser && confirmPass === pass && email != '' && pass != '') {
				await authHandler.signin(email, pass);
			} else {
				error = true;
				return;
			}
		} catch (error) {
			console.log(error);
		}
	}
</script>
<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
<div class="authContainer">
	<h1>{isNewUser ? 'Sign UP' : 'Log IN'}</h1>
	{#if error}
		<p class="error">Email or password that you have entered is Incorrect / Not registered</p>
	{/if}
	<form>
		<label>
			<p class={email ? 'above' : 'center'}>Email</p>
			<input
				bind:value={email}
				type="email"
				name="email"
				id="email"
				placeholder="Email"
			/>
		</label>
		<label>
			<p class={pass ? 'above' : 'center'}>Password</p>
			<input
				bind:value={pass}
				type="password"
				name="password"
				id="password"
				placeholder="Password"
			/>
		</label>
		{#if isNewUser}
			<label>
				<p class={confirmPass ? 'above' : 'center'}>Confirm password</p>
				<input
					bind:value={confirmPass}
					type="password"
					name="confirmPassword"
					id="confirmPassword"
					placeholder="Confirm Password"
				/>
			</label>
		{/if}
		<button class="saveit" type="submit" on:click={handleSubmit}><span>Submit</span></button>
	</form>
	<div class="options">
		<p>OR</p>
		{#if isNewUser}
			<div>
				<p>Already have an account?</p>
				<p on:click={() => (isNewUser = false)} on:keydown={() => {}}>Log IN</p>
			</div>
		{:else}
			<div>
				<p>Don't have and account?</p>
				<p on:click={() => (isNewUser = true)} on:keydown={() => {}}>Sign UP</p>
			</div>
		{/if}
	</div>
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
	}
	form {
		display: flex;
        padding-top: 5%;
		flex-direction: column;
	}
	form,
	.options {
		width: 400px;
		max-width: 100%;
		gap: 24px;
		margin: 0 auto;
	}
    
	form input {
		width: 93%;
		border: none;
		font-size: 1.2rem;
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        font-family: "Poppins",sans-serif;
		padding: 14px;
		background: transparent;
	}
	input:focus {
		border: none;
		outline: none;
	}
	h1 {
		font-size: 3rem;
		margin-bottom: 10px;
        
	}
	form label {
		position: relative;
		border: 1.5px solid #89fa9d;
		border-radius: 10px;
	}
	form label:focus-within {
		border: 2.5px solid #89fa9d;
        border-radius: 10px;
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
	.above,
	.center {
		position: absolute;
		transform: translateY(-99%);
		pointer-events: none;
		border-radius: 5px;
		padding: 0 6px;
		font-size: 0.8 rem;
		background-color: white;
		padding: 2px;
		margin-left: 10px;
	}
	.above {
		top: 0;
	}
	.center {
		top: 50%;
		opacity: 0;
	}
	.error {
		font-size: 0.9 rem;
		color: rgb(215, 40, 40);
		margin: 5px;
		padding: 5px;
	}
	.options {
		padding: 14px 0;
		overflow: hidden;
	}
	.options > p {
		position: relative;
		text-align: center;
		width: fit-content;
		margin: 0 auto;
		padding: 0 10px;
	}
	.options > p::after,
	.options > p::before {
		content: '';
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 100vw;
		height: 1.5px;
		background: black;
	}
	.options > p::before {
		left: 100%;
	}
	.options > p::after {
		right: 100%;
	}
	.options div {
		padding: 10px 0;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}
	.options div p:last-of-type {
		color: rgb(4, 133, 133);
		cursor: pointer;
	}
        
</style>