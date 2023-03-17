// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAFwiWzrjJAruqRHhSwIXzw2fnVV78yHxc",

  authDomain: "hologramqi.firebaseapp.com",

  projectId: "hologramqi",

  storageBucket: "hologramqi.appspot.com",

  messagingSenderId: "956292624586",

  appId: "1:956292624586:web:85d43ef8c451217fd40433"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();