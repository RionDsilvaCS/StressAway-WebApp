<script>
// @ts-nocheck


    import { initializeApp } from "firebase/app";
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { getFirestore, collection, onSnapshot,doc, updateDoc, deleteDoc, addDoc} from "firebase/firestore";
    import {firebaseConfig, auth} from "$lib/firebaseConfig";
	import Mainlogo from "./mainlogo.svelte";

    const firebaseApp = initializeApp(firebaseConfig);
    
    const db =  getFirestore();
    
    const user = auth.currentUser;
    
    // async onAuthStateChanged(auth, (user) => {
    //   if(user){
    //     return await user.email;
    //   }
    //   else{
    //     //user is signed out
    //   }
    // });

//     async function mail() {
//   let myPromise = async mailAuth(auth, (user) => {
//       if(user){
//         email = user.email;
//       }
//       else{
//         //user is signed out
//       }
//     });
//   return await myPromise;
// }


    let reg = user.email;
    const firstDotIndex = reg.indexOf(".");
    const regid = reg.substring(firstDotIndex + 1, firstDotIndex + 10);
    
    console.log(regid);

    const colRef = collection(db, regid);
    
    let journal = [ ];

const unsubscribe = onSnapshot(colRef, (querySnapshot) => {
    let fbJournal = [];
  querySnapshot.forEach((doc) => {
    let journa = {...doc.data(),id : doc.id}
    fbJournal = [journa,...fbJournal];
  });
  journal = fbJournal;
});



   
    let content="";

    

</script>


<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
<p class="fl">
    Here are your previous Journals.!
</p>

<div class="journals">

        <p class = "prevJournal">
            {#each journal as item}
            <div class = "journaltxt"><div class = "text">
              <ol>{item.content}
                <br><br><p class = "date">
                - {item.date}</p>
              </ol>
            </div>
            <br>
          </div>
            {/each}
        </p> 
           
</div>

    

   

<style>
    /* General styles */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.date{
  font-weight:bold;
}

.fl{
    padding-top: 40px;
    padding-left: 100px;
    padding-bottom: 60px;
    font-family: "Poppins",sans-serif;
    font-weight: bold;
    font-size: 26px;
}
  .journaltxt{
  background-color: #E7FFEB;
  height: 250px;
  width: 600px;
  border-radius: 25px;
  margin-left: 100px;
  margin-bottom: 30px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.10);  
  }


  .prevJournal{
    font-family: "Poppins",sans-serif;
    font-size: 18px;
  }
  .journals{
    padding-bottom: 30px;
  }
  .text{
    padding-left: 5%;
    padding-top: 5%;
    padding-bottom: 5%;
    padding-right: 5%;
  }

</style>
