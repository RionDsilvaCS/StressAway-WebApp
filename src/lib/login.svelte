<script>
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

     let email='';
     let pass='';

     function submit() {
		signInWithEmailAndPassword(auth, email, pass).then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            console.log("success");
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
         });

	}
</script>

<div class="container">

    <div id="cont">
        <div id="login" class="loginc">
            <h3>Login</h3>

            <input bind:value={email} class="box" type="email" placeholder="Email" required/>
            <input bind:value={pass} class="box" type="password" placeholder="Password" required/>
            <input on:click={submit} type="submit" value="Submit"/>

        </div>
    </div>
</div>

<style>
    .container{
        width: 300px;
        background-color:rgb(150, 232, 195);
        padding: 24px;
        border-radius: 16px;
    }
    h3{
        font-family: poppins;
        color: white;
    }
    .box{
        margin-bottom: 24px;
        border-radius: 4px;
        width: 276px;
        height: 36px;
        border-color: rgb(150, 232, 195);
        box-shadow: none;
        padding-left: 12px;
        font-family: poppins;
    }
        
</style>