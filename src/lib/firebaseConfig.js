import {getFirestore} from 'firebase/firestore'
import {initializeApp, getApps, getApp, deleteApp} from 'firebase/app';
import {getAuth} from 'firebase/auth'


export const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
    measurementId: import.meta.env.MEASUREMENTID
};



let firebaseApp;

if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
}
else {
  firebaseApp = getApp();
  deleteApp(firebaseApp)
  firebaseApp = initializeApp(firebaseConfig)
}

export const db= getFirestore(firebaseApp);
export const auth= getAuth(firebaseApp);