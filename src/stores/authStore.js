// @ts-nocheck

import { writable } from "svelte/store";
import { auth, db } from "$lib/firebaseConfig";
import { createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword, signOut, getAuth } from "firebase/auth";
import { doc, updateDoc, setDoc, getDoc } from "@firebase/firestore";

	export let authCheck;
    // export let regid;

  
    // let regid='';

export const authStore = writable({
    user: null,
    loading: true,
    data: {}
});


const auth1 = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid)
  }
});
export const authHandler = {
    signin: async(email, password) => {
        await createUserWithEmailAndPassword(auth, email, password);
    },
    login: async(email, password) => {
        await signInWithEmailAndPassword(auth, email, password);
        onAuthStateChanged(auth1, (user) => {
            if (user) {
              const uid = user.uid;
              console.log(uid)
              window.location.href = '/journal';
              authCheck = true;
            //   let reg = user.email;
            //     const firstDotIndex = reg.indexOf(".");
            //     const regid = reg.substring(firstDotIndex + 1, firstDotIndex + 10);

             }
          });
    },
    signout: async() => {
        await signOut(auth);
    }
};

export const dbHandler = {
    updateDoc: async(collection, document, data) => {
        await updateDoc(doc(db, collection, document), data)
    },
    setDoc: async(collection, document, data) => {
        await setDoc(doc(db, collection, document), data);
    },
    getDoc: async(collection, document) => {
        const docSnap = await getDoc(doc(db, collection, document))
        return docSnap;
    }
}
