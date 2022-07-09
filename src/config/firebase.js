import {initializeApp} from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import {getDatabase} from "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   
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