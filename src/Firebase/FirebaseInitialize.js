import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";

console.log(firebaseConfig)
 const initializeFirebase=()=>{
     initializeApp(firebaseConfig)
 }
 export default initializeFirebase;