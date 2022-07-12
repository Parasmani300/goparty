import {initializeApp} from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import {getDatabase} from "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAbSTsn_YKsl0J7e-pg5GUuQ72PXJEb1WA",
  authDomain: "goparty-484f1.firebaseapp.com",
  projectId: "goparty-484f1",
  storageBucket: "goparty-484f1.appspot.com",
  messagingSenderId: "193370412369",
  appId: "1:193370412369:web:25ab30443fb97885d22f70",
  measurementId: "G-QM1RWPBE9M" 
  };

initializeApp(firebaseConfig);

const db = getDatabase();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = () =>{
    signInWithPopup(auth,googleProvider)
    .then((res) =>{
        console.log(res.user);
    })
    .catch((error) => {
        console.log(error);
    })
}

const emailPasswordSignIn = (email,password) => 
{
    signInWithEmailAndPassword(auth,email,password)
    .then((res) =>{
        console.log("SIgne In " + res.user);
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