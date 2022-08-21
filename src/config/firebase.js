import {initializeApp} from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import {getDatabase} from "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSNpKrVKCBWDWUmqM96eVrcgM4xI1LI5E",
    authDomain: "samaajtoday.firebaseapp.com",
    projectId: "samaajtoday",
    storageBucket: "samaajtoday.appspot.com",
    messagingSenderId: "626175714922",
    appId: "1:626175714922:web:88ca6a9d9579b4e5c78c13",
    measurementId: "G-3KP1JGGDES"
  };

initializeApp(firebaseConfig);

const db = getDatabase();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = (navigate) =>{
    signInWithPopup(auth,googleProvider)
    .then((res) =>{
        console.log(res.user);
        navigate("home")
    })
    .catch((error) => {
        console.log(error);
    })
}

const emailPasswordSignIn = (email,password,navigate) => 
{
    signInWithEmailAndPassword(auth,email,password)
    .then((res) =>{
        console.log("SIgne In " + res.user);
        navigate("home");
    })
    .catch((error) =>{
        console.log(error);
    })
}

const signUpNow = (email,password) => {
    createUserWithEmailAndPassword(auth,email,password)
    .then((res) =>{
        console.log(res.user);
    })
    .catch((error) =>{
        console.log(error);
    })
}


export { db, auth,signInWithGoogle,signUpNow,emailPasswordSignIn};