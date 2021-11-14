import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const initializeFirebase =()=>{
    const app = initializeApp(firebaseConfig);
}

export default initializeFirebase;