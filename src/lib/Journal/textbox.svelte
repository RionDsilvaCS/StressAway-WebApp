<script>
// @ts-nocheck

  import { initializeApp, getApps, getApp } from "firebase/app";
  import { getFirestore, collection, onSnapshot,addDoc, updateDoc, setDoc  } from "firebase/firestore";
	import { empty } from "svelte/internal";
  import {firebaseConfig, auth} from "../firebaseConfig";
  

    let  Texti = "";
  

    
    const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    const db = getFirestore();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const date = new Date();
  let day = date.getDate();
  let month = monthNames[date.getMonth()];
  let year = date.getFullYear();

  const user = auth.currentUser;


    let currentDate =  `${day} ${month}, ${year}`;
    
    const userEmail = "puneeth.21bce7948@vitstudent.ac.in" ;
    console.log(userEmail);
    const firstDotIndex = userEmail.indexOf(".");
    const regid = userEmail.substring(firstDotIndex + 1, firstDotIndex + 10);
    console.log(regid);

    const colRef = collection(db, regid);

      async function handleClick() {
        if (Texti.length !== 0){
          console.log(Texti);
          await addDoc(colRef, {
          content: Texti,
          date : currentDate
        //   await setDoc(colRef, {
        //     content : Texti,
        //     date : currentDate
        });
    }
    
    }


    // value="Reload Page" onClick="window.location.reload(true)"



</script>
<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
<div class="all">
<div class = "Texte"><textarea bind:value={Texti} class="journaltxt" maxlength="1200" rows="15" cols="60"></textarea><br>
 
</div>
<div class="button_container">
    <button class="saveit" on:click = {handleClick}><span>Save it! for future</span></button>
    <br>
    
    <form action="/prev">
    <button class="prev" on:click = {handleClick}><span>Previous Jorunals</span></button>
  </form>
    
    



  </div>
</div>  
<style>
  .all{
    font-family: 'Poppins', sans-serif;
  }


    .journaltxt{
  background-color: #E7FFEB;
  padding: 10px;
  font-size: 20px;
  font-family: Poppins,sans-serif;
  border: none;
  resize: none;
  height: 400px;
  width: 600px;
  padding-left: 40px;
  border-radius: 25px;
  padding-top: 40px;
  padding-right: 40px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.10);  
  padding-bottom: 40px;
  }
  

  .Texte{
    padding-left: 99px;
    padding-bottom: 100px;
    padding-top: 30px;
  }




.button_container {
    margin-bottom: 30px;
    padding-left: 120px;
    font-family: "Poppins",sans-serif;
}


.saveit {
  border: none;
  display: block;
  text-align: left;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  position: relative;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  background-color: #ffffff;
  padding: 15px 50px;
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
  height: 490%;
  width: 150%;
  background: #89fa9d;
  -webkit-transition: all .5s ease-in-out;
  transition: all .5s ease-in-out;
  -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
  transform: translateX(-98%) translateY(-25%) rotate(45deg);
  
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


.prev {
  border: none;
  display: block;
  text-align: left;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  position: relative;
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  background-color: #ffffff;
  padding: 15px 50px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.20);
}

.prev span {
  position: relative; 
  color: #1e3b41;
  z-index: 1;
}

.prev:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 490%;
  width: 140%;
  background: #5C8893;
  -webkit-transition: all .5s ease-in-out;
  transition: all .5s ease-in-out;
  -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
  transform: translateX(-98%) translateY(-25%) rotate(45deg);
  
}

.prev:hover:after {
  -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
  transform: translateX(-9%) translateY(-25%) rotate(45deg);
  
}



.prev:active {
  transform: translate(0em, 0.15em);
}


.prev:active::before {
  transform: translate3d(0, 0, -1em);
  box-shadow: 0 0 0 2px var(--colorShadeB), 0 0.25em 0 0 var(--colorShadeB);
}
  
</style>