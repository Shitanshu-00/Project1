import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2msTDn3wg4mwPYmyf8036N0KVn6wIdqI",
  authDomain: "thkhiladi-844c5.firebaseapp.com",
  databaseURL: "https://thkhiladi-844c5-default-rtdb.firebaseio.com",
  projectId: "thkhiladi-844c5",
  storageBucket: "thkhiladi-844c5.appspot.com",
  messagingSenderId: "245289014657",
  appId: "1:245289014657:web:20290cd01dc851929e8480"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication
const auth = getAuth(app);

// Initialize cloud Firestore 
const db = getFirestore(app);

export {app, auth, db};